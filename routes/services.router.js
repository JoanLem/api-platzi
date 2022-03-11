const express = require('express');
const router = express.Router();
const service = require('../services/services.service');


 const servicesSevices = new service;

router.get('/', (req, res) =>{
  const listServices = servicesSevices.find()
  res.json(
    listServices
  )
})

module.exports = router;
