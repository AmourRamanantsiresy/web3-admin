export const errorHandler = (error, _req, res, _next) => {
  const statusCode = error.status || 500;
  res.status(statusCode).json({
    code: error.status,
    message: error.message || 'Internal Server Error',
  });
};
