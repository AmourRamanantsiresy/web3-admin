import { z } from 'zod';

export const validators = {
  pass: () => z.custom(() => true),
  string: name =>
    z.custom(value => !value || ['string', 'number'].includes(typeof value), { message: `The ${name} should be a string` }).transform(value => `${value}`),
  enum: (valueName, enums) => z.custom(value => enums.includes(value), { message: `The provided ${valueName} should be one of [ ${enums.join(', ')} ]` }),
};
