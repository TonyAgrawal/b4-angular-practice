function display() {
    console.log("welecome");
}
var Student = /** @class */ (function () {
    function Student() {
    }
    Student.prototype.display = function () {
        var a;
    };
    return Student;
}());
var ps = new Student();
console.log("Test " + ps);
console.log(ps);
console.log(display);
console.log("test " + display);
