"use strict";
//* Q2) Given students' names along with the grade that they are in, create a roster for the school.
Object.defineProperty(exports, "__esModule", { value: true });
exports.GradeSchool = void 0;
class GradeSchool {
    constructor() {
        this.studentDB = {};
    }
    roster() {
        return JSON.parse(JSON.stringify(this.studentDB));
    }
    add(name, grade) {
        for (let key in this.studentDB) {
            this.studentDB[key] = this.studentDB[key].filter((student) => student !== name);
        }
        if (!this.studentDB[grade]) {
            this.studentDB[grade] = [];
        }
        this.studentDB[grade].push(name);
        this.studentDB[grade].sort();
    }
    grade(grade) {
        if (!this.studentDB[grade]) {
            return [];
        }
        return JSON.parse(JSON.stringify(this.studentDB[grade]));
    }
}
exports.GradeSchool = GradeSchool;
//# sourceMappingURL=asses2.js.map