var studentid: number = 400;
var passed: boolean = true;

/*
 *
 */
function displayValue() {
  //   let name: string = "test";
  console.log("displayValue : student id : " + studentid + " : " + name1);
}

function displayValue1() {
  console.log("displayValue1 : student id : " + studentid + " : " + name1);
}

var name1 = "test 1";

// displayValue();

// displayValue1();

//==================Array : Tuple : Enum ======

// undefined
var testData;

function test() {
  console.log("Test data : " + testData);
  testData = 10;
  console.log("Test data : " + testData);
}

// test();

var stidentids = [10, 20, 30, 40, "test"];

function arrayTest() {
  console.log("Array display : " + stidentids);

  //   for (let i = 0; i < stidentids.length; i++) {
  //     console.log(stidentids[i]);
  //   }

  for (let stdid of stidentids) {
    console.log(stdid);
  }
}

// arrayTest();

// tuple

var prodspec: [number, string, boolean] = [10, "20", true];

function arrayTest1() {
  console.log("Array display : " + prodspec);
}

// arrayTest1();

// enum Subjects = { English : 1, Maths : 2, Sceience : 3};

// enum Subjects = { English : 1, Maths : 2, Sceience : 3};

// function enumTest() {
//     console.log("Enum access Test : " + Subjects.English);
// }

// enumTest();

// Loops : For, While, Do-while

// Functions

function sampleParameterTest(var1: number, var2): number {
  let total = var1 + var2;
  return total;
}

// console.log("Addition : " + sampleParameterTest(10, "test"));

// Optional parameter

function sampleParameterTest1(var1: number = 10, var2?): number {
  if (var2 == undefined) {
    // var2 = 30;
    return var1;
  }

  let total = var1 + var2;
  return total;
}

// console.log("Addition : " + sampleParameterTest1(10, 20));

// console.log("Addition : " + sampleParameterTest1(10));

// default for a paramer

// Functions in java script is tracted as object

function display() {
  console.log("Welcome to display");
}

function callBackfunction(test) {
  test(); // executing the callback function
  console.log("Call back function called : " + test); // printing the object

  let mysample1 = (param1?) => {
    console.log("Display of Arrow function " + param1);
    return param1 + 100;
  };

  mysample1();

  //
  console.log(mysample1("Sample param"));
}

callBackfunction(display);

// Arrow function ; inline or Lambda function : experimetal feature

let mysample = () => {
  console.log("Display of Arrow function");
};

// mysample();
