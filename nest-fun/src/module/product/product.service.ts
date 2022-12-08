import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { Store } from '../store/store.entity';
import { CreateProductRequest } from './create-product.dto';
import { Product } from './product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product) private productServeice: Repository<Product>,
  ) {}

  async createProduct(
    product: CreateProductRequest,
    store: Store,
  ): Promise<Product> {
    const newProd = await this.productServeice.save({
      name: product.name,
      description: product.description,
      price: product.price,
    });
    store.products = [...store.products, newProd];
    await store.save();
    return newProd;
  }

  getProductById(id: number): Promise<Product> {
    return this.productServeice.findOne({
      where: { id: id },
    });
  }

  getProductByName(name: string): Promise<Product[]> {
    console.log('hello');

    return this.productServeice.find({ where: { name: Like(`%${name}%`) } });
  }

  getAllProduct(): Promise<Product[]> {
    return this.productServeice.find();
  }

  deleteProductById(id: number) {
    return this.productServeice.delete({ id: id });
  }
}
