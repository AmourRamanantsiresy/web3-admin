import { z } from 'zod';
import { BadRequestError } from '../errors/BadRequest.error.js';
import { errorFormatter } from './utilities/errorsFormatter.js';
import { validators } from './utilities/validators.utilities.js';

const schema = z.object({
  id: validators.pass(),
  configuration_id: validators.pass(),
  filename: z.string({ message: 'Filename is required' }).min(4, { message: 'Filename length should contains at least 4 characters' }),
  content: z.string({ message: 'Content is required' }).min(4, { message: 'Content length should contains at lease 4 characters' }),
  description: z.string({ message: 'Description is required' }).min(4, { message: 'Description length should contains at lease 4 characters' }),
});

export const validateFileConfiguration = (req, _res, next) => {
  const result = schema.safeParse(req.body);
  if (!result.success) BadRequestError(errorFormatter(result.error.format()), next);
  req.validatedData = result.data;
  next();
};
