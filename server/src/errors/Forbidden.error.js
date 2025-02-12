export const ForbiddenError = (message, next) => {
  const forbiddenError = new Error(message);
  forbiddenError.status = 403;
  next(forbiddenError);
};
