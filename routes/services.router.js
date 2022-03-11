const express = require('express');
const router = express.Router();
const service = require('../services/services.services');


const servicesSevices = new service;
router.get('/', (req, res) =>{
  const listServices = servicesSevices.find()
  res.json(
    listServices
  )
})
