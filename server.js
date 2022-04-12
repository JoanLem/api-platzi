const express = require('express');
const routerApi= require('./routes');
const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');
// const cors = require('cors');

const app = express();
const port = 3000;
app.use(express.json())

app.use
app.set('port', process.env.PORT || port)

app.get('/', (req, res)=>{
  res.send('server running in port ' + port)
})

app.get('/test', (req, res)=>{
  res.json({
    "data": "welcome to the Api test",
    "status": 200,
    "mesaje": "Api Running",
    "port": app.get('port')

  })
})


routerApi(app)

// meddileware
// Configurar cabeceras y cors
// app.use(cors())
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);





// ------- Server running
app.listen(app.get('port'), ()=>{
  console.log('server running in port', app.get('port'))
})
