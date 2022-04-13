function logErrors(err, req, res, next) {
  // console.log('funcion logErrors');
  console.error(err);
  next(err);
}

function boomErrorHandler(err, req, res, next) {
  // console.log('funcion boomErrorHandler');
  if (err.isBoom) {
    const {output} = err;
    res.status(output.statusCode).json(output.payload);
  }
  next(err)
}

function errorHandler(err, req, res, next) {
  // console.log('funcion errorHandler');
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
}


module.exports = { logErrors , errorHandler, boomErrorHandler };
