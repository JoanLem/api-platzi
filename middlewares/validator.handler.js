const boom = require('@hapi/boom');

function validatorHandler(dto, property) {
  // console.log('funcion ValidatorHandler');
  return (req, res, next) => {
    const data = req[property];
    const { error } = dto.validate(data, { abortEarly: false });
    if (error) {
      next(boom.badRequest(error));
    }
    next();
  };
}

module.exports = validatorHandler;
