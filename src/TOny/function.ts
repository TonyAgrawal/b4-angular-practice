function add(a:number,b:number=0,d?:number):number//means ? refers to optional no need to pass value
{
return a+b+d;
}
var x= add(2,3,4);
//add(2,2,2); wont throw error but b value ll be  3 if not then then default value
console.log(x);