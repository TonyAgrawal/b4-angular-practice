"use strict";
// import  [applicable across the module entities]
exports.__esModule = true;
// class definition
// interface definitin
// normal excutal code
var temptext = "Sample Text";
// export abstract class Student {
var Student = /** @class */ (function () {
    function Student() {
    }
    Student.prototype.display = function () {
        console.log("Student Sample : " + temptext);
    };
    return Student;
}());
exports.Student = Student;
// export default Student;
console.log(temptext);
var student = new Student();
student.display();
