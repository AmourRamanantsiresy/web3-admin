import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { User } from '../models/User.model.js';

export class UserServices {
  static async singUp(userId, user) {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(user.password, salt);
    const parsedUser = { ...user, id: userId, password: hashedPassword };
    const createdUser = await User.create(parsedUser);
    createdUser.password = undefined;
    return createdUser;
  }

  static async signIn(email, password) {
    const user = await User.findOne({ email });
    if (!user) throw new Error(`User with email=${email} not fount`, { status: 404 });
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) throw new Error(`Bad password`, { status: 400 });
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '10h' });
    return token;
  }
}
