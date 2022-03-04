const express = require('express')
const router = express.Router();


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
