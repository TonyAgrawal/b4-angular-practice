import {student,Tony} from "./module";
class student1 extends student{

display1(){
    console.log("inside child class");
}



}
Tony();
//console.log(JSON.stringify(Tony));
var a :student = new student1();
a.display();
//a.display1();//give comile error as reference is of parent if child then no error