const express = require('express')
const productsRouter = require("./products.router")
const usersRouter = require("./user.router")

function routerApi(app){
  const router = express.Router();
  app.use('/api/v1', router)
  router.use('/test', (req,res)=>{
    res.json({
      "data": "welcome to the Api V1 test ",
      "status": 200,
      "mesaje": "Endpoint OK"
    })
  })
  router.use('/products', productsRouter)
  router.use('/users', usersRouter)

}

module.exports = routerApi;
