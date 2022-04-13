const express = require('express')
const productsRouter = require("./products.router")
const usersRouter = require("./user.router")
const servicesRouter = require("./services.router")

function routerApi(app){
  const router = express.Router();
  app.use('/api/v1', router)
  router.use('/products', productsRouter)
  router.use('/users', usersRouter)
  router.use('/servicios', servicesRouter)

  // Endpoint para testear el api
  router.use('/test', (req,res)=>{
    res.json({
      "data": "welcome to the Api V1 test ",
      "status": 200,
      "mesaje": "Endpoint OK"
    })
  })
  // -----------------------------

}

module.exports = routerApi;
