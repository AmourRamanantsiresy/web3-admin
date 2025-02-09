import { z } from 'zod';
import { BadRequestError } from '../errors/BadRequest.error.js';
import { errorFormatter } from './utilities/errorsFormatter.js';
import { validators } from './utilities/validators.utilities.js';

const schema = z.object({
  id: validators.pass(),
  title: z.string({ message: 'Title is required' }).min(4, { message: 'Title length should contains at least 4 characters' }),
  description: validators.string('description'),
  image_id: validators.pass(),
  configuration_type: validators.enum('configuration type', ['desktop', 'grub', 'vim', 'widget']),
});

export const validateConfiguration = (req, _res, next) => {
  const result = schema.safeParse(req.body);
  if (!result.success) BadRequestError(errorFormatter(result.error.format()), next);
  req.validatedData = result.data;
  next();
};
