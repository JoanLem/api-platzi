const express = require('express');
const router = express.Router();
const service = require('../services/services.service');
const validatorHandler = require('.././middlewares/validator.handler');
const { createProductDto, updateProductDto, getProductDto } = require('.././dto/products.dto');

 const servicesSevices = new service;

router.get('/', async(req, res,next) =>{
  const listServices = await servicesSevices.find()
  res.json(
    listServices
  )
  console.log(listServices)
})

module.exports = router;
