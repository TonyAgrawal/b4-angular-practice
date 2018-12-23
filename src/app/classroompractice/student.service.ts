import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class StudentService {
  stdid = 100;

  studentList = [
    { stdid: 1000, stdname: "Ram", stddob: "10-Dec-2007" },
    { stdid: 1001, stdname: "Santhi", stddob: "10-Jun-2007" },
    { stdid: 1002, stdname: "Sarath", stddob: "10-Jan-2007" },
    { stdid: 1003, stdname: "Akbar", stddob: "10-Apr-2007" },
    { stdid: 1005, stdname: "John", stddob: "10-May-2007" }
  ];

  constructor() {}

  getStudentList() : Student[] {
    return this.studentList;
  }

  setStudentID(id) {
    this.stdid = id;
  }

  getStudentID() {
    return this.stdid;
  }

}

class Student {
  stdid;
  stdname;
  stddob;
}
