import {
  Controller,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
  Get,
  Param,
  Delete,
  Put,
  NotFoundException,
} from '@nestjs/common';
import { CreateProductsRequest } from './create-products.dto';
import { FilterProductsDTO } from './filter-products.dto';
import { ProductsService } from './products.service';
@Controller('product')
export class ProductsController {
  constructor(private productService: ProductsService) {}

  @Get('/')
  async getProducts(
    @Param('filterProductDTO') filterProductDTO: FilterProductsDTO,
  ) {
    if (Object.keys(filterProductDTO).length) {
      const filteredProducts = await this.productService.getFilteredProducts(
        filterProductDTO,
      );
      return filteredProducts;
    } else {
      const allProducts = await this.productService.getAllProduct();
      return allProducts;
    }
  }

  @Post()
  @UsePipes(ValidationPipe)
  async createProduct(@Body() storeInfo: CreateProductsRequest) {
    return await this.productService.createProduct(storeInfo);
  }

  @Get(':id')
  async getProductById(@Param('id') id: number) {
    return await this.productService.getProductById(id);
  }

  @Get('name/:name')
  async getProductByName(@Param('name') name: string) {
    return await this.productService.getProductByName(name);
  }

  @Get()
  async getAllProduct() {
    return await this.productService.getAllProduct();
  }

  @Delete(':id')
  async deleteProductById(@Param('id') id: number) {
    return await this.productService.deleteProductById(id);
  }

  @Put('updateProduct/:id')
  async updateProduct(
    @Param('id') id: number,
    @Body() createProductsRequest: CreateProductsRequest,
  ) {
    const product = await this.productService.updateProduct(
      id,
      createProductsRequest,
    );
    if (!product) throw new NotFoundException('Product does not exist!');
    return product;
  }

  @Post('')
  async purchaseProduct(
    @Param('id') id: number,
    @Body() TotalPrize: number,
    quantity: number,
  ) {
    return this.productService.purchaseProduct(id, TotalPrize, quantity);
  }
}
