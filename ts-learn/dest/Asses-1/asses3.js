"use strict";
//* Q3) Implement basic list operations.
Object.defineProperty(exports, "__esModule", { value: true });
exports.List = void 0;
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
class List {
    constructor(...values) {
        this.values = values;
    }
    static create(...values) {
        return new List(...values);
    }
    append(other) {
        this.values = [...this.values, ...other.values];
        return this;
    }
    concat(other) {
        for (let l of other.values) {
            this.values = [...this.values, ...l.values];
        }
        return this;
    }
    foldl(fn, init) {
        let result = init;
        for (let el of this.values) {
            result = fn(result, el);
        }
        return result;
    }
    foldr(fn, init) {
        let result = init;
        for (let i = this.values.length - 1; i >= 0; i--) {
            result = fn(result, this.values[i]);
        }
        return result;
    }
    length() {
        return this.values.length;
    }
    forEach(fn) {
        for (let el of this.values) {
            fn(el);
        }
    }
    map(fn) {
        let l = new List();
        for (let el of this.values) {
            l.values = [...l.values, fn(el)];
        }
        return l;
    }
    filter(fn) {
        let l = new List();
        for (let el of this.values) {
            if (fn(el)) {
                l.values = [...l.values, el];
            }
        }
        return l;
    }
    reverse() {
        let result = new List();
        for (let el of this.values) {
            result.values = [el, ...result.values];
        }
        return result;
    }
}
exports.List = List;
//# sourceMappingURL=asses3.js.map