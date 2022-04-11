const Joi = require('joi');



const id = Joi.string().uuid();
const product = Joi.string().alphanum().min(3).max(10);
const price = Joi.number().integer().min(5.3);


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
