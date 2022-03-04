class productsService {

  constructor(){
    this.products = [
      {id : 1},
      {id : 2},
      {id : 3}
    ];
  }

  find(){
    return this.products;
  }


}

module.exports = productsService
