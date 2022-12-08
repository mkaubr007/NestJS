import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository, UpdateResult } from 'typeorm';
import { CreateProductsRequest } from './create-products.dto';
import { Products } from './products.entity';
import { FilterProductsDTO } from './filter-products.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Products) private productServeice: Repository<Products>,
  ) {}

  async getFilteredProducts(
    filterProductDTO: FilterProductsDTO,
  ): Promise<Products[]> {
    const { category, search } = filterProductDTO;
    let products = await this.getAllProduct();

    if (search) {
      products = products.filter(
        (products) =>
          products.name.includes(search) ||
          products.description.includes(search),
      );
    }

    if (category) {
      products = products.filter((product) => product.category === category);
    }

    return products;
  }

  async createProduct(product: CreateProductsRequest): Promise<Products> {
    return await this.productServeice.save({
      name: product.name,
      description: product.description,
      price: product.price,
      category: product.category,
    });
  }

  getProductById(id: number): Promise<Products> {
    return this.productServeice.findOne({ where: { id: id } });
  }

  getProductByName(category: string): Promise<Products[]> {
    return this.productServeice.find({
      where: { name: Like(`%${category}%`) },
    });
  }

  getAllProduct(): Promise<Products[]> {
    return this.productServeice.find();
  }

  deleteProductById(id: number) {
    return this.productServeice.delete({ id: id });
  }

  updateProduct(
    id: number,
    createProductsRequest: CreateProductsRequest,
  ): Promise<UpdateResult> {
    if (id == createProductsRequest.id)
      return this.productServeice.update(id, createProductsRequest);
  }

  async purchaseProduct(id: number, TotalPrize: number, quantity: number) {
    console.log('quantity-----', id, TotalPrize, quantity);
    const result = await this.productServeice.findOne({ where: { id: id } });
    if (result.quantity < quantity) {
      return { msg: 'u may buying out quantity product' };
    } else {
      const price = result.price * quantity;

      if (price > TotalPrize) {
        return { msg: 'u have insufficient amount to buy this product' };
      } else if (price <= TotalPrize) {
        result.quantity = result.quantity - 1;

        if (result.quantity === 0) {
          return await this.productServeice.update(
            { id: id },
            { quantity: 0, onSale: false },
          );
        }

        return await this.productServeice.update(
          { id: id },
          { quantity: result.quantity },
        );
      }
    }

    return result;
  }

  async returnProduct(id: number, name: string) {
    const result = await this.productServeice.findOne({
      where: { id: id },
    });

    if (result.returnable === true) {
      this.productServeice.update(
        { name: name },
        {
          quantity: result.quantity + 1,
          price: (result.price * 90) / 100,
        },
      );

      return `${result.price} is refund to customer`;
    } else return `${name} has no return policy`;
  }
}
