const { response } = require('express');
const express = require('express');
const router = express.Router();
const productsService = require('../services/products.service');
const { createProductDto, updateProductDto, getProductDto } = require('.././dto/products.dto');
const validatorHandler = require('.././middlewares/validator.handler');

const service = new productsService();

// Find All
router.get('/', async (req, res) => {
  await service.find();
  res.status(200).json({
    message: 'response OK',
    service,
  });
});

// Find one by ID
router.get('/:id',
validatorHandler(getProductDto, 'params'),
async(req, res, next) => {
  try {
    const { id } = req.params;
    const product = await service.findOne(id);
    res.json(product);

  } catch (error) {
    next(error)
  }
});

// Create a Item
router.post('/',
validatorHandler(createProductDto,'body'),
async(req, res, next) => {
  try {
    const data = req.body;
    console.log(`objeto a crear  ${data}`)
    const newproduct = await service.create(data);
    res.json(newproduct);
  } catch (error) {
    next(error)
  }
});

// Update a item by ID
router.patch('/:id',
validatorHandler(getProductDto,'params'),
validatorHandler(updateProductDto,'body'),
async(req, res, next) => {
  try {
    const data = req.body;
    const { id } = req.params;
    const product = service.update(id, data);
    res.json(product);
  } catch (error) {
    next(error);
  }
});

// Delete a item
router.delete('/:id',
validatorHandler(getProductDto,'params'),
async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await service.delete(id);
    res.json(product);
  } catch (error) {
    next(error)
  }
});

module.exports = router;
