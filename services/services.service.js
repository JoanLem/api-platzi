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
  return this.services;

}

findOne(){

}

update(){

}

delete(){

}
}

module.exports = servicesService;
