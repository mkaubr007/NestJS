import { Injectable } from '@nestjs/common';
// import { errorMessage, Store } from './store';

@Injectable()
export class AppService {
  // store = 0;
  // getHello(): string {
  //   return 'Hello World!';
  // }
  // gapiCallRec(obj: { count: number }) {
  //   this.store += obj.count;
  //   return 'Store increment';
  // }
  // apiCallRes(param: number) {
  //   console.log(param);
  //   return this.store;
  // }
  // store: Store[] = [];
  // getAllStore(): Store[] {
  //   return this.store;
  // }
  // getStore(storeName: string): Store | errorMessage {
  //   const result = this.store.filter((store) => store.name === storeName);
  //   if (result.length > 0) {
  //     return result[0];
  //   } else {
  //     return { message: 'Store not found' };
  //   }
  // }
  // addStore(store: Store) {
  //   this.store.push(store);
  //   return true;
  // }
  // modifyStore(storeName: string, newStoreName: string) {
  //   const pos = this.store.findIndex((store) => store.name === storeName);
  //   if (pos !== -1) {
  //     this.store[pos].name = newStoreName;
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }
  // deleteStore(storeName: string) {
  //   const oldLength = this.store.length;
  //   this.store = this.store.filter((store) => store.name !== storeName);
  //   return oldLength !== this.store.length;
  // }
  //*Assingment
  //*Store
  //*POst: create store with {name:Sting,account:number=0}
  //*Get: to fetch one store with respect to store name
  //*Get all the store
  //*Put modify the store name
  // arrayofStore: { name: string; account: number }[] = [];
  // createStore(object: { name: string; account: number }): string {
  //   console.log('pushingArray', this.arrayofStore.push(object));
  //   this.arrayofStore.push(object);
  //   return 'Store is crested sucessfully';
  // }
  // getAllStore() {
  //   return this.arrayofStore;
  // }
  // getStore(accountno: number) {
  //   this.arrayofStore.forEach((element) => {
  //     if (element.account === accountno) {
  //       console.log('fetchData', element);
  //       return element;
  //     }
  //   });
  // }
  // modifyStore(storeInfo: string, accountId: string) {
  //   const pos = this.arrayofStore.findIndex(
  //     (arrayofStore) => arrayofStore.name === storeInfo,
  //   );
  //   if (pos !== -1) {
  //     this.arrayofStore[pos].name = accountId;
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }
  // removeStore(accountno: number) {
  //   return this.arrayofStore.filter((element) => {
  //     console.log('Deleted this Store', element.account);
  //     element.account === accountno;
  //   });
  // }
}
