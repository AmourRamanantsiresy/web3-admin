export const NotFoundError = (message, next) => {
  const notFoundError = new Error(message);
  notFoundError.status = 404;
  next(notFoundError);
};
