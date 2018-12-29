function add(a, b, d) {
    if (b === void 0) { b = 0; }
    return a + b + d;
}
var x = add(2, 3, 4);
//add(2,2,2); wont throw error but b value ll be  3 if not then then default value
console.log(x);
