//* Q3) Implement basic list operations.

// const list1: number[] = [1, 2, 3, 4, 5];
// const list2: number[] = [6, 7, 8, 9, 10];
// const counts = {};
// list1.push(10);
// list1.forEach((item) => console.log(item));
// const rsult = [list1.concat(list2)];
// rsult.forEach((item) => console.log(item));
// let filteResult = list1.filter((f) => list2.indexOf(f) !== -1);
// filteResult.forEach((item) => console.log(item));
// let total:any = list1.length-1;
// console.log(total);
// let mapResult= list1.map(Math.ceil)
// mapResult.forEach((item) => console.log(item));
// let reverseResult=list1.reduce(function(a,b){return a-b})
// console.log(reverseResult);

export class List {
    values: any[];
    constructor(...values: any[]) {
      this.values = values;
    }
    public static create(...values: any[]): List {
      return new List(...values);
    }
    public append(other: List): List {
      this.values = [...this.values, ...other.values];
      return this;
    }
    public concat(other: List): List {
      for (let l of other.values) {
        this.values = [...this.values, ...l.values];
      }
      return this;
    }
    public foldl<T, U>(fn: (acc: T, el: U) => T, init: T): T {
      let result = init;
      for (let el of this.values) {
        result = fn(result, el);
      }
      return result;
    }
    public foldr<T, U>(fn: (acc: T, el: U) => T, init: T): T {
      let result = init;
      for (let i = this.values.length - 1; i >= 0; i--) {
        result = fn(result, this.values[i]);
      }
      return result;
    }
    public length(): number {
      return this.values.length;
    }
    public forEach(fn: (el: any) => void): void {
      for (let el of this.values) {
        fn(el);
      }
    }
    public map<T>(fn: (el: any) => T): List {
      let l = new List();
      for (let el of this.values) {
        l.values = [...l.values, fn(el)];
      }
      return l;
    }
    public filter<T>(fn: (el: T) => boolean): List {
      let l = new List();
      for (let el of this.values) {
        if (fn(el)) {
          l.values = [...l.values, el];
        }
      }
      return l;
    }
    public reverse(): List {
      let result = new List();
      for (let el of this.values) {
        result.values = [el, ...result.values];
      }
      return result;
    }
  }
  