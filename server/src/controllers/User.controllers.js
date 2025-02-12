import { v4 } from 'uuid';
import { BadRequestError } from '../errors/BadRequest.error.js';
import { User } from '../models/User.model.js';
import { UserServices } from '../services/User.services.js';

export class UserController {
  static async signIn(req, res, _next) {
    try {
      const { email, password } = req.validatedData;

      const token = await UserServices.signIn(email, password);
      req.json({ token });
    } catch (error) {
      res.json({ code: error.status, message: error.message });
    }
  }
  static async signUp(req, res, next) {
    const user = req.validatedData;
    const userExistEmail = await User.findOne({ where: { email: user.email } });
    const userExistUsername = await User.findOne({ where: { username: user.username } });
    if (userExistEmail) {
      BadRequestError('Email=' + user.email + ' is already used', next);
    }
    if (userExistUsername) {
      BadRequestError('Username=' + user.username + ' is already used', next);
    }

    const createdUser = await UserServices.singUp(v4(), user);

    res.json(createdUser);
  }
}
