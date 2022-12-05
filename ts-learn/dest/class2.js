"use strict";
// * basic Class defination
// class Account {
//   constructor(public readonly id: number,public owner: string,public balance: number) {
//     this.id = id;
//     this.owner = owner;
//     this.balance = balance;
//   }
//   deposite(amount: number) {
//     this.balance += amount;
//   }
// }
// let account = new Account(1, "Manish", 41);
// account.balance=28;
// class Account {
//     constructor(public readonly id: number,public owner: string,private _balance: number) {
//       this._balance = _balance;
//     }
//     deposite(amount: number) {
//       this._balance += amount;
//     }
//     public get balance() : number {
//         return this._balance
//     }
//   }
//    let account=new Account(1, "Manish", 41)
// * Parameter properties & getters setters
// class Account {
//     adminAccount?: boolean;
//     constructor(public readonly id: number,public _owner: string,private _balance: number, access?: boolean) {
//       this.adminAccount= access;
//     }
//     deposite(amount: number) {
//       this._balance += amount;
//     }
//     get balance() : number {
//         return this._balance
//     }
//     set owner(value : string) {
//        if (this.balance<100) {
//             console.log("Cannot modify owner");
//        }else{
//         this._owner= value;
//        }
//     }
//     get owner(){
//         return this._owner;
//     }
//   }
//    let account=new Account(1, "Manish", 41)
//    account.owner="Jaswinder";
// * assign properties to class object dynamically
//  class Seats {
//    [seatNumber: string]: string;
//  }
//  let seat =new Seats();
// seat.A1= "Manish";
// // Static member
// class Ride {
//   private static activeRides: number = 0;
//   start() {
//     Ride.activeRides++;
//   }
//   stop() {
//     Ride.activeRides--;
//   }
//   get ActiveRide() {
//     return Ride._activeRides;
//   }
// }
// let ride1 = new Ride();
//* Inheritance
// class Person {
//   protected height: number=2;
//   constructor(public fName: string, public lName: string) {}
//   public get fullName(): string {
//     return `${this.fName} ${this.lName} ${this.height}`;
//   }
//   walk() {
//     console.log("walking");
//   }
// }
// class Student extends Person {
//   constructor(public stuId: number, fName: string, lName: string) {
//     super(fName, lName);
//   }
//   takeTest() {
//     console.log(`${this.fullName} is taking test`);
//   }
// }
// let stu1 = new Student(1, "Manish", "kumar");
// stu1.takeTest;
// // *overriding
// class Teacher extends Person {
//   constructor(fName: string, lName: string) {
//     super(fName, lName);
//   }
//   override get fullName(): string {
//     return `Prof .${super.fullName}`;
//   }
// }
// let stu2 = new Teacher("Manish", "Kumar");
// console.log(stu2.fullName);
// // ? pollymorphism
// function prinNames(people: Person[]): void {
//   for (let person of people) {
//     console.log(person.fullName);
//   }
// }
// prinNames([
//   new Student(1, "Manish", "Kumar"),
//   new Teacher("Manish", "Kumar"),
//   new Person("Manish", "Kumar"),
// ]);
// // *Open Close Principl :
// // Abstract Classes
// abstract  class Shape {
//   constructor(public color: string) {}
//     abstract render(): void
// }
//   class Circle extends Shape {
//     constructor(public radius:number, color:string) {
//       super(color);
//     }
//   }
// }
//# sourceMappingURL=class2.js.map