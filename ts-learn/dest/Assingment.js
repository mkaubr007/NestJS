"use strict";
//*Assingment
// *write a function which take array of employee
// *then it will return two arrays which will consist
// *retire and non retire employee separately
// * My Solution
// let userEmployeeStatus: {  name: string ,age: number}[] = [
//     {  "name": "Rajesh","age":65 },
//     { "name": "Nagesh","age":54 },
//     {  "name": "Dhirendra","age":62 }
// ];
// const retirePerson= userEmployeeStatus.filter((obj)=>{
//     return obj.age>60;
// })
// console.log("Retired Person- ",retirePerson);
// const notRetirePerson= userEmployeeStatus.filter((obj)=>{
//     return obj.age<60;
// })
// console.log("Not Retired person-",notRetirePerson);
//Problem 
// we will have three type person , a student and a Teacher, parent, ??
//all of them will have an account variable in it with some balance amount
//we will multiply student with 1.2* , Teacher with 2.3* and parent 4*
// return all the students belongin to all the parents
//solution 
// enum Designation {
//     Student,
//     Teacher,
//     Parent,
// }
// type Person = {name: string; account: number; desig: Designation}
// type Parent = Person & { students: string[]};
// type Population = Person | Parent;
// function generatePerson(
//     name: string,
//     account: number,
//     desig: Designation,
//     students?: string[]
//     ): Population {
//     if(students) {
//         return {name: name, account:account, desig: Designation.Parent, students:students}
//     }else{
//         return {name: name, account:account, desig:desig};
//     }
// }
// let tepArr: Population[] = [
//     generatePerson("Rajesh",23,Designation.Student),
//     generatePerson("Romit",23,Designation.Student),
//     generatePerson("Jaswinder",23,Designation.Teacher),
//     generatePerson("Amit",23,Designation.Parent, ["Rajesh","Romit"])
// ];
// function increase(array: Population[]): Population[] {
//     for (let i = 0; i < array.length; i++) {
//        switch (array[i].desig) {
//         case Designation.Parent:
//             array[i].account *=4;
//             break;
//         case Designation.Student:
//             array[i].account *=1.2;
//             break;
//         case Designation.Teacher:
//             array[i].account *=2.3;
//             break;
//        }
//     }
//     return array;
// }
// * PVR ticketing system
//* make a program which takes object of People and then
//* assign ticket to those People with ticket class and save their
//* arrange in a Seat Class dynamically also they should deduct a fixed free from
//* people account balance
// *My solution
// class People {
//   constructor(
//     readonly id: number,
//     public owner: string,
//     private _balance: number
//   ) {}
//   deposite(amount: number) {
//     this._balance += amount;
//   }
//   public get balance(): number {
//     return this._balance;
//   }
//   generateRandomSeatNo() {
//     let silver = Math.floor(Math.random() * (1 - 100 + 1)) + 1;
//     let gold = Math.floor(Math.random() * (100 - 500 + 1)) + 1;
//     if (this.balance < 100) {
//       console.log("A2 Caterories seat no- ", silver);
//     } else this._balance >= 100;
//     {
//       console.log("A1 Caterories seat no- ", gold);
//     }
//   }
// }
// let account = new People(1, "Manish", 100);
// console.log(account);
// account.generateRandomSeatNo();
// Store
// * A super class that is a 'Product',Food item, utensils, books
// * they have a price and have transaction function -UPI or Case
// *My Solution
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
class Food extends Product {
    constructor(name, price, qty) {
        super(name, price);
        this.name = name;
        this.price = price;
        this.qty = qty;
    }
    makeTransaction(tracType) {
        console.log(`${this.qty} ${this.name} purchase using ${tracType}`);
    }
}
class Utensils extends Product {
    constructor(name, price, utMaterial) {
        super(name, price);
        this.name = name;
        this.price = price;
        this.utMaterial = utMaterial;
    }
    makeTransaction(tracType) {
        console.log(`${this.utMaterial} ${this.name} purchase using ${tracType}`);
    }
}
class Books extends Product {
    constructor(name, price, booktype) {
        super(name, price);
        this.name = name;
        this.price = price;
        this.booktype = booktype;
    }
    makeTransaction(tracType) {
        console.log(`${this.booktype} ${this.name} purchase using ${tracType}`);
    }
}
let mango = new Food("Banana", 10, 20);
console.log(mango);
let cup = new Utensils("Cup", 45, "Clay");
console.log(cup);
let book = new Books("Marvel", 95, "story");
console.log(book);
//* Assingment
// *Define a class called Logger that takes
//* the name of title in its constructor and provide a
//* method for writting messages to that file. Don't worry about the actual
// * file I/O operations. Just define the class with the right members
// * create a getter for getting the full name of a person
//* create a new class called Employee that extends Person and adds a new property called salary
//* define an interface for representing employee
// class Logger {
//   constructor(public message: string) {}
// }
// class Person {
//   constructor(public fName: string, public lName: string) {}
//   public get fullName(): string {
//     return `${this.fName} ${this.lName}`;
//   }
// }
// class Employee extends Person {
//   constructor(public salary: number, fName: string, lName: string) {
//     super(fName, lName);
//   }
// }
// interface IEmployee {
//   name: string;
//   salary: number;
//   address: Address;
// }
// interface Address {
//   street: string;
//   city: string;
//   zipCode: number;
// }
// let employee = {
//   name: "John Smith",
//   salary: 5000,
//   address: {
//     street: "Flinder st",
//     city: "Melbourne",
//     zipCode: 3144,
//   },
// };
// console.log(employee);
//# sourceMappingURL=Assingment.js.map