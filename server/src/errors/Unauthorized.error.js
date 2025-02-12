export const UnauthorizedError = (message, next) => {
  const unauthorizedError = new Error(message);
  unauthorizedError.status = 401;
  next(unauthorizedError);
};
