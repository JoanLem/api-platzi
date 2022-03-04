const express = require('express');
const router = express.Router();
const service = require('../services/products.service');


const productsService = new service;

router.get('/', (req,res) => {
  productsService.find();
  res.status(200).json(
    {
      message:'response OK',
      productsService
    },
  )
})

router.get('/parametros', (req,res)=>{
  const {id,size} = req.query;
  console.log(`se esta aca`)
  console.log(`${id} y ${size}`)
})

router.get('/:id', (req , res) =>{
  const id = req.params.id;
  res.json({
    id,
    name: "Papa",
    precio: 5000
  });
})

router.post('/', (req , res) =>{
  const body = req.body;
  res.status(201).json({ //manejo de codigos de respuesta HTTP 201 - creado
    message: 'servicio creado',
    data: body
  })
})

router.patch('/:id', (req , res) =>{
  const body = req.body;
  res.json({
    message: 'servicio actualizado',
    data: body
  })
})


module.exports = router;
