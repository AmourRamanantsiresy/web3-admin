export const ForbiddenError = (message, next) => {
  const forbiddenError = new Error(message);
  forbiddenError.status = 404;
  next(forbiddenError);
};
