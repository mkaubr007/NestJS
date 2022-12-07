//* Q2) Given students' names along with the grade that they are in, create a roster for the school.

export class GradeSchool {
  private studentDB: { [key: number]: string[] }
  constructor() {
    this.studentDB = {}
  }
  roster(): any {
    return JSON.parse(JSON.stringify(this.studentDB))
  }
  add(name: string, grade: number): void {
    for (let key in this.studentDB) {
      this.studentDB[key] = this.studentDB[key].filter(
        (student) => student !== name
      )
    }
    if (!this.studentDB[grade]) {
      this.studentDB[grade] = []
    }
    this.studentDB[grade].push(name)
    this.studentDB[grade].sort()
  }
  grade(grade: number): string[] {
    if (!this.studentDB[grade]) {
      return []
    }
    return JSON.parse(JSON.stringify(this.studentDB[grade]))
  }
}


