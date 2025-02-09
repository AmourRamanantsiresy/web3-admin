import { z } from 'zod';
import { BadRequestError } from '../errors/BadRequest.error.js';
import { errorFormatter } from './utilities/errorsFormatter.js';
import { validators } from './utilities/validators.utilities.js';

const schema = z.object({
  id: validators.pass(),
  username: z.string({ message: 'Username is required' }).min(4, { message: 'Username length should contains at least 4 characters' }),
  email: z.string({ message: 'Email is required' }).email({ message: 'Invalid email' }),
  password: z.string({ message: 'Password is required' }).min(8, { message: 'Password length should contains at least 8 characters' }),
});

export const validateUser = (req, _res, next) => {
  const result = schema.safeParse(req.body);
  if (!result.success) BadRequestError(errorFormatter(result.error.format()), next);
  req.validatedData = result.data;
  next();
};
