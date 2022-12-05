import {
  // Body,
  Controller,
  // Delete,
  // Get,
  // Param,
  // Post,
  // Put,
} from '@nestjs/common';
import { AppService } from './app.service';
// import { Store, errorMessage } from '../src/store';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }
  // @Post('makeStore')
  // makeStore(@Body() storeBody: { count: number }): string {
  //   return this.appService.gapiCallRec(storeBody);
  // }
  // @Get('getStore/:supId/:newSupId')
  // getStore(@Param() param: { supId: number; newSupId: number }) {
  //   return this.appService.apiCallRes(param.newSupId);
  // }
  // @Get()
  // getAllStores(): Store[] {
  //   return this.appService.getAllStore();
  // }
  // @Get(':storename')
  // getStore(@Param('storeName') storeName: string): Store | errorMessage {
  //   return this.appService.getStore(storeName);
  // }
  // @Post()
  // addStore(@Body() storeObj: Store): errorMessage {
  //   return this.appService.addStore(storeObj)
  //     ? { message: 'Store created' }
  //     : { message: 'Failed to create store' };
  // }
  // @Put(':storeName')
  // modifyStore(
  //   @Body() newStoreObj: { name: string },
  //   @Param('storeName') storeName: string,
  // ) {
  //   return this.appService.modifyStore(storeName, newStoreObj.name)
  //     ? { message: 'Store modify' }
  //     : { message: 'Failed to create store' };
  // }
  // @Delete(':storeName')
  // deleteStore(@Param('storeName') storeName: string) {
  //   return this.appService.deleteStore(storeName)
  //     ? { message: 'Store remove' }
  //     : { message: 'Failed to remove store' };
  // }
  // @Post(':createStore')
  // createStore(@Body() storeInfo: { name: string; account: number }): string {
  //   return this.appService.createStore(storeInfo);
  // }
  // @Get()
  // getAllStore() {
  //   return this.appService.getAllStore();
  // }
  // @Get(':getStore/:accountId')
  // getStore(@Param() param: { accountId: number }) {
  //   return this.appService.getStore(param.accountId);
  // }
  // @Put(':modifyStore/:accountId')
  // modifyStore(
  //   @Body() storeInfo: { name: string },
  //   @Param('accountId') accountId: string,
  // ) {
  //   return this.appService.modifyStore(accountId, storeInfo.name);
  // }
  // @Delete(':removeStore/:accountId')
  // removeStore(@Param() param: { accountId: number }) {
  //   return this.appService.removeStore(param.accountId);
  // }
}
