const express = require('express');
//const { restart } = require('nodemon');
const routerApi= require('./routes')

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


// ------- Server running
app.listen(app.get('port'), ()=>{
  console.log('server running in port', app.get('port'))
})
