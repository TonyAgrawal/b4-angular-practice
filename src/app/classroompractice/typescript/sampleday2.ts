enum subjects {
  "Engilish",
  "Maths",
  "Science"
}

// console.log(subjects[1]);

// console.log(subjects.Maths);

// any

function anySample(a: any) {
  console.log(a);
}

// anySample(10);

// anySample("Test");

// anySample(true);

// Union

function unionSample(a: number | string | boolean): number | string {
  console.log(a);
  let b = "test " + a;
  return b;
}

unionSample(10);

unionSample("Test");

unionSample(true);


// Generic : Collection ==> Object [retrive ==> typecast || class cast exception @ runtime]
// Vector <Student> ==> Add, Read, Updage with Student
