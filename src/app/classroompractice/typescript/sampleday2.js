var subjects;
(function (subjects) {
    subjects[subjects["Engilish"] = 0] = "Engilish";
    subjects[subjects["Maths"] = 1] = "Maths";
    subjects[subjects["Science"] = 2] = "Science";
})(subjects || (subjects = {}));
// console.log(subjects[1]);
// console.log(subjects.Maths);
// any
function anySample(a) {
    console.log(a);
}
// anySample(10);
// anySample("Test");
// anySample(true);
// Union
function unionSample(a) {
    console.log(a);
    var b = "test " + a;
    return b;
}
unionSample(10);
unionSample("Test");
unionSample(true);
