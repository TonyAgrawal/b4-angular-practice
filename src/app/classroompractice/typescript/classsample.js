var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Child = /** @class */ (function () {
    function Child(name) {
        this.name = name;
    }
    Child.prototype.displayState = function () {
        console.log("Child : " + this.name);
    };
    return Child;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    // constructors
    function Student(stdClass, age, firstName) {
        var _this = _super.call(this, firstName) || this;
        _this.stdClass = stdClass;
        // Section 1 : Memeber Variable instance & static (class level)
        // default - public
        _this.stdid = 10;
        _this.age = age;
        _this.firstName = firstName;
        return _this;
    }
    //   constructor () {
    //     this.age = age;
    //     this.firstName = firstName;
    //   }
    //   constructor (age) {
    //     this.age = age;
    //     this.firstName = firstName;
    //   }
    // functions
    Student.prototype.displayState = function () {
        console.log(Student.School_Name);
        console.log(this.stdid +
            " : " +
            this.age +
            " : " +
            this.firstName +
            " : " +
            this.stdClass);
        _super.prototype.displayState.call(this);
    };
    //   displayState(disp : boolean) {
    //     console.log(Student.School_Name);
    //     console.log(this.stdid + " : " + this.age + " : " + this.firstName);
    //   }
    Student.test = function () {
        console.log("Welcome to Student Class");
    };
    Student.School_Name = "Sample School";
    return Student;
}(Child));
var primaryStudent = new Student(5, 10, "sasi");
primaryStudent.displayState();
// let primaryStudent1: Student = new Student(6, 10);
// primaryStudent1.displayState();
// Student.test();
