export const BadRequestError = (message, next) => {
  const badRequestError = new Error(message);
  badRequestError.status = 400;
  next(badRequestError);
};
