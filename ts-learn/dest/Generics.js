"use strict";
// class KeyValuePair<T> {
//   constructor(public key: T, public value: string) {}
// }
// class StringKeyValuePair {
//   constructor(public key: number, public value: string) {}
// }
// let pair = new KeyValuePair<string>("1", "Manish");
// function wrapInArray<T>(value: T): T[] {
//   return [value];
// }
// let num = wrapInArray<number>(1);
// // *function inside of a class
// class ArrayUtils<T> {
//   wrapArray(value: T) {
//     return [value];
//   }
// }
// *Generics in Interface
// interface Result<T> {
//   data: null | T;
//   error: string | null;
// }
// function fetch<T>(url: string): Result<T> {
//   return { data: null, error: null };
// }
// interface User {
//   username: string;
// }
// interface Product {
//   title: string;
// }
// let result = fetch<Product>("url");
// console.log(result.data?.title);
// *constraints in generics
// function echo<T>(value: T): T {
//   return value;
// }
// interface NewProduct {
//   name: string;
//   price: number;
// }
// class Store<T> {
//   protected _object: T[] = [];
//   add(obj: T): void {
//     this._object.push(obj);
//   }
//   find(property: keyof T, value: unknown) {
//     return this._object.find((obj) => obj[property] === value);
//   }
// }
// let newStore = new Store<NewProduct>();
// newStore.add({ name: "Spoons", price: 2 });
// console.log(newStore.find("name", "Spoons"));
//# sourceMappingURL=Generics.js.map