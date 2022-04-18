const boom = require('@hapi/boom');
const { v4: uuidv4 } = require('uuid');

class productsService {
  constructor() {
    this.products = [
      {
        id: '123e4567-e89b-12d3-a456-426655440000',
        product: 'potato',
        price: 15.0,
      },
      {
        id: '123e4567-e89b-12d3-a456-426655440001',
        product: 'Banana',
        price: 5.0,
      },
      {
        id: '123e4567-e89b-12d3-a456-426655440002',
        product: 'cafe',
        price: 12.5,
      },
      {
        id: '123e4567-e89b-12d3-a456-426655440003',
        product: 'Rice',
        price: 8.9,
      },
      {
        id: '123e4567-e89b-12d3-a456-426655440004',
        product: 'Egg',
        price: 12.5,
      },
      {
        id: '123e4567-e89b-12d3-a456-426655440005',
        product: 'Tomato',
        price: 7.8,
      },
    ];
  }

  find() {
    console.log('Run Function findAll - in products.service');
    return new Promise((resolve, reject) => {
      resolve(this.products);
    });
  }

  findOne(id) {
    const product = this.products.find((item) => item.id == id);
    console.log('Run Function findOne - in products.service');
    if (!product) {
      throw boom.notFound(`producto ${id} no fue encontrado`);
    }
    console.log('Final Function findOne - in products.service');
    console.log(product);
    return product;
  }

  create(data) {
    const newproduct = {
      id: uuidv4(),
      ...data,
    };
    this.products.push(newproduct);
    return newproduct;
  }

  update(id, data) {
    const index = this.products.findIndex((item) => item.id == id);
    if (index === -1) {
      throw new Error('el producto no fue encontrado');
    }
    const product = this.products[index];
    this.products[index] = {
      ...product,
      ...data,
    };
    return this.products[index];
  }

  delete(id) {
    const index = this.products.findIndex((item) => item.id == id);
    this.products.splice(index, 1);
  }
}

module.exports = productsService;
