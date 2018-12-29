// import  [applicable across the module entities]

// class definition

// interface definitin

// normal excutal code

var temptext = "Sample Text";

// export abstract class Student {
export class Student {
  stdid;
  display() {
    console.log("Student Sample : " + temptext);
  }
}

// export default Student;

console.log(temptext);

let student = new Student();//scope ?

student.display();

export interface IStudent {
  calcMarks();
}
