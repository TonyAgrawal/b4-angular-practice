"use strict";
exports.__esModule = true;
var modulesample_1 = require("./modulesample");
// student
var School = /** @class */ (function () {
    function School() {
    }
    School.prototype.display = function () {
        var pstudent = new modulesample_1.Student();
        pstudent.display();
    };
    School.prototype.calcMarks = function () {
    };
    return School;
}());
var mySchool = new School();
mySchool.display();
