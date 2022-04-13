const express = require('express');
const routerApi= require('./routes');
const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');
const cors = require('cors');

const app = express();
const port = 3000;
app.use(express.json())


const whiteList = ['http://127.0.0.1:5500','http://localhost:5000'];
const option = {
  origin: (origen, callback)=>{
    if (whiteList.includes(origen) || !origen) {
      callback(null,true);
    } else {
      callback(new Error('NO Access'));
    }
  }
}

app.use(cors(option))

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
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);





// ------- Server running
app.listen(app.get('port'), ()=>{
  console.log('server running in port', app.get('port'))
})
