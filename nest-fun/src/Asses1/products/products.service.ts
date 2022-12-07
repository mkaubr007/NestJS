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

  async createProduct(store: CreateProductsRequest): Promise<Products> {
    return await this.productServeice.save({
      name: store.name,
      description: store.description,
    });
  }

  getProductById(id: number): Promise<Products> {
    return this.productServeice.findOne({ where: { id: id } });
  }

  getProductByName(name: string): Promise<Products[]> {
    console.log('hello');

    return this.productServeice.find({ where: { name: Like(`%${name}%`) } });
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
    const result = await this.productServeice.findOne({ where: { id: id } });

    if (result.quantity < quantity) {
      return { msg: 'You may buying out quantity product' };
    } else {
      const price = result.price * quantity;

      if (price > TotalPrize) {
        return { msg: 'You have insufficient amount to buy this product' };
      } else if (price === TotalPrize && price < TotalPrize) {
        result.quantity -= quantity;
      }
    }
  }
}
