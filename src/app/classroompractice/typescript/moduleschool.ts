

import { Student, IStudent } from "./modulesample";

// student

class School implements IStudent {
  constructor() {}

  display() {
    let pstudent: Student = new Student();

    pstudent.display();
  }

  calcMarks() {

  }
}

let mySchool = new School();

mySchool.display();
