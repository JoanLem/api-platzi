const express = require('express');
const router = express.Router();
const service = require('../services/users.service');


const usersServices = new service;

router.get('/', (req,res)=>{
  usersServices.find();
  res.status('200').json(
    usersServices
  )

})


router.get('/', (req, res)=>{
  res.json({
    mensaje: 'test del enpoint para usuarios',
    data:{
      status: 200,
      response: 'Hello world'
    }

  }
  )
})



module.exports = router;
