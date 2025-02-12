import jwt from 'jsonwebtoken';
import { ForbiddenError } from '../errors/Forbidden.error.js';
import { UnauthorizedError } from '../errors/Unauthorized.error.js';

export const verifyToken = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) return UnauthorizedError('Require bearer token', next);

  const regexToGetUserId = /\/users\/id\/([^/]+)/;
  const match = req.url.match(regexToGetUserId);

  if (!match) return next();

  try {
    const verified = jwt.verify(token.split(' ')[1], process.env.JWT_SECRET);
    req.user = verified;
    console.log(verified);
    if (verified.id === match[1]) return next();
    ForbiddenError('Ressource forbidden.', next);
  } catch (err) {
    UnauthorizedError('Invalid token', next);
  }
};
