const express = require('express');
const router = express.Router();
const service = require('../services/services.service');
const validatorHandler = require('.././middlewares/validator.handler');
const { createProductDto, updateProductDto, getProductDto } = require('.././dto/products.dto');

 const servicesSevices = new service;

router.get('/', (req, res,next) =>{
  const listServices = servicesSevices.find()
  res.json(
    listServices
  )
})

module.exports = router;
