const Joi = require('joi');


// validaciones de valores
const id = Joi.string().uuid();
const product = Joi.string().min(3).max(10);
const price = Joi.number().min(5);

// Estructura del objeto

const createProductDto = Joi.object({
  product : product.required(),
  price : price.required()
})

const updateProductDto = Joi.object({
  product : product.required(),
  price : price.required(),
})

const getProductDto = Joi.object({
  id : id.required(),
})

module.exports= {createProductDto,updateProductDto,getProductDto}
