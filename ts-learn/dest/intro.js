"use strict";
// console.log("Hello World")
// let age:number=20
// function convert(age: number){
//     if(age<3){
//         console.log("kid");
//     }else{
//         console.log("not kid")
//     }
// }
// let arry:any[]=[1,"2",3,"4"]
// function printStar(arr:any[]){
//     for(let i:number=0;i< arr.length;i++){
//        let rep: number = typeof arr[i]==="string" ? parseInt(arr[i]) : arr[i]
//         for(let j:number=0;j<rep;j++){
//             console.log("*");
//         }
//         console.log("\n");
//     }
// }
// printStar(arry)
//* Typealiasing
// type Employee={empId:number;age:number};
// type EmpResp=[Employee[],Employee[]];
//  function genEmp(id:number,age:number):Employee{
//     return{empId:id,age:age};
//  }
//  const empArr:Employee[]=[genEmp(1,72),genEmp(3,4)];
//  function filterEmps(array:Employee[]):EmpResp{
//     let res:EmpResp=[[],[]];
//     res[0]=array.filter((item)=>item.age<=60);
//     res[0]=array.filter((item)=>item.age<=60);
//     return res;
//  }
//  console.log(filterEmps(empArr));
// * union types
// function kgToLbs(weight:number | string): number {
//     switch (typeof weight) {
//         case "number":
//             return weight * 2.2;
//         case "string":
//             return parseInt(weight)* 2.2;
//     }
// }
// * intersection types
// type Draggable = {
//     drag: ()=> void;
// };
// type Resizable = {
//     resize: () => void;
// };
// type UIWidget = Draggable & Resizable;
// let Clock: UIWidget = {drag: () => {} , resize: () => {}};
// *Nullable type
// *this will throw error
// function greet(name: string | null | undefined) {
//     if (name) {
//         console.log(name);
//     }else{
//         console.log("hello");
//     }
// }
// greet(null);
// * optional Chaining
// type Customer = {
//     birthday: Date;
// };
// function getCustomer(id: number): Customer | null | undefined {
//     return id === 0 ? null : {birthday: new Date()};
// }
//  let customer = getCustomer(1);
//  if (customer !== null && customer !== undefined) {
//     console.log(customer.birthday.getFullYear());
//  }
//  console.log(customer?.birthday?.getFullYear());
// * Unknow Types
// * avoid
// function render(document: unknown) {
//     if (typeof document === "string") {
//         console.log(document.toUpperCase());
//     }else(document instanceof Teacher) {
//         parseFloat(document);
//     }
// }
// * Nullish coalscing
// let speed: null | number = null;
// let ride = {
//     vSpeed: speed !== null ? speed : 30,
// };
// let bRide = {
//     vSpeed: speed ?? 30,
// };
// *Type assertion : when you know more about the object then Typescript
// let phone = document.getElementById("phone") as HTMLInputElement;
// phone.value;
// let phone2 = <HTMLIFrameElement>document.getElementById("phone");
// *Never Type:
// function infiniteLoop(): never {
//     while (true) {}
// }
// infiniteLoop();
// console.log("work");
//# sourceMappingURL=intro.js.map