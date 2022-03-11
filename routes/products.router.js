const express = require('express');
const router = express.Router();
const productsService = require('../services/products.service');


const service = new productsService;

router.get('/', (req,res) => {
  service.find();
  res.status(200).json(
    {
      message:'response OK',
      service
    },
  )
})

router.get('/:id', (req,res)=>{
  const { id } = req.params;
  const product = service.findOne(id);
  res.json(
    product
  )
})

router.post('/',(req,res)=>{
  const data = req.body
  const newproduct = service.create(data);
  res.json(
    newproduct
  )
})

router.patch('/:id',(req,res)=>{
  const data = req.body
  const {id} = req.params;
  const product = service.update(id, data)
  res.json(product)
})

router.delete('/:id',(req,res)=>{
  const {id} = req.params;
  const product = service.delete(id)
  res.json(product)
})

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
