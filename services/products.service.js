class productsService {

  constructor(){
    this.products = [
      {id : 1,
      product: 'papa'},
      {id : 2},
      {id : 3,
      name: 'care monda'}
    ];
  }

  find(){
    return this.products;
  }

  findOne(id){
    return this.products.find(item => item.id == parseInt(id))
  }

  create(data){
    const newproduct = {
      ...data
    }
    this.products.push(newproduct)
    return newproduct;
  }

  update(id, data){
    const index = this.products.findIndex(item => item.id == parseInt(id))
    const product = this.products[index]
    this.products[index] = {
      ...product,
      ...data
    }
    console.log("estoy aqui ---------------------------------------------------")
    return  this.products[index]
  }

  delete(id){
    const index = this.products.findIndex(item => item.id == parseInt(id))
    this.products.splice(index,1)
  }


}

module.exports = productsService
