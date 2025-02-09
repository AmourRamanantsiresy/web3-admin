import { UserServices } from '../services/User.services.js';

export class UserController {
  static async signIn(req, res, _next) {
    try {
      const { email, password } = res.validatedData;
      const token = await UserServices.signIn(email, password);
      req.json({ token });
    } catch (error) {
      res.json({ code: error.status, message: error.message });
    }
  }
  static async signUp(req, res, _next) {
    const { id } = req.params;
    const user = req.validatedData;
    const createdUser = await UserServices.singUp(id, user);
    res.json(createdUser);
  }
}
