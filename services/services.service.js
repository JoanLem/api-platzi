const getConneccion = require('../libs/postgres')

class servicesService{

  constructor(){
    this.services = [
      {
        id : 1,
        services: 'first services'
      },
      {
        id : 2,
        services: 'second services'
      },
      {
        id : 3,
        services: 'trith services'
      }
    ]
  }

async find(){
  const client = await getConneccion();
  const response = await client.query('select * from products');
  console.log(response.rows);
  return (await response).rows;

}

findOne(){

}

update(){

}

delete(){

}
}

module.exports = servicesService;
