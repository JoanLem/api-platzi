const { response } = require('express');
const express = require('express');
const router = express.Router();
const productsService = require('../services/products.service');
const ValidatorHandler = require('.././middlewares/validator.handler');
const { createProductDto, updateProductDto, getProductDto } = require('.././dto/products.dto');
const validatorHandler = require('.././middlewares/validator.handler');

const service = new productsService();

router.get('/', async (req, res) => {
  await service.find();
  res.status(200).json({
    message: 'response OK',
    service,
  });
});

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

router.post('/', (req, res) => {
  const data = req.body;
  const newproduct = service.create(data);
  res.json(newproduct);
});

router.patch('/:id', (req, res, next) => {
  try {
    const data = req.body;
    const { id } = req.params;
    const product = service.update(id, data);
    res.json(product);
  } catch (error) {
    next(error);
    // res.status(404).json({
    //   name: error.name,
    //   mensaje: error.message,
    //   stack: error.stack
    // });
  }
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const product = service.delete(id);
  res.json(product);
});

// router.get('/parametros', (req,res)=>{
//   const {id,size} = req.query;
//   console.log(`se esta aca`)
//   console.log(`${id} y ${size}`)
// })

// router.get('/:id', (req , res) =>{
//   const id = req.params.id;
//   res.json({
//     id,
//     name: "Papa",
//     precio: 5000
//   });
// })

// router.post('/', (req , res) =>{
//   const body = req.body;
//   res.status(201).json({ //manejo de codigos de respuesta HTTP 201 - creado
//     message: 'servicio creado',
//     data: body
//   })
// })

// router.patch('/:id', (req , res) =>{
//   const body = req.body;
//   res.json({
//     message: 'servicio actualizado',
//     data: body
//   })
// })

module.exports = router;
