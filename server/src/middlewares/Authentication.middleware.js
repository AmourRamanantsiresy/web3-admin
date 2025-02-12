import jwt from 'jsonwebtoken';
import { ForbiddenError } from '../errors/Forbidden.error.js';
import { NotFoundError } from '../errors/NotFound.error.js';
import { UnauthorizedError } from '../errors/Unauthorized.error.js';
import { UserServices } from '../services/User.services.js';

export const verifyToken = async (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) return UnauthorizedError('Require bearer token', next);

  const regexToGetUserId = /\/users\/*\/([^/]+)/;
  const match = req.originalUrl.match(regexToGetUserId);

  if (!match) return next();

  try {
    const verified = jwt.verify(token.split(' ')[1], process.env.JWT_SECRET);

    if (verified.id !== match[1]) return ForbiddenError('Ressource forbidden.', next);

    const userInDatabase = await UserServices.getOneById(verified.id);

    if (!userInDatabase) NotFoundError('User with id=' + verified.id + ' not found.', next);

    req.user = userInDatabase;

    next();
  } catch (err) {
    UnauthorizedError('Invalid token', next);
  }
};
