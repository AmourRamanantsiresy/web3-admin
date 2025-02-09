export const InternalServerError = (message, next) => {
  const notFoundError = new Error(message);
  notFoundError.status = 500;
  next(notFoundError);
};
