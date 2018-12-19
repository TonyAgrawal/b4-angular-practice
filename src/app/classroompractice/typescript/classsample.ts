
// Multiple parent class : Where define interface => Contracting :  
// Defining and Ensuring the standard ways of doing things // reduces coupling 
// Program to interface instead of class

interface IStudent {
    calcMarks() : number;
}

interface IChild {
    healthCheck() : boolean;
}

// abstract

class Child {
  protected name;

  constructor(name) {
    this.name = name;
  }

  displayState() {
    console.log("Child : " + this.name);
  }
}

class Student extends Child implements IStudent, IChild {
  // Section 1 : Memeber Variable instance & static (class level)
  // default - public
  stdid: number = 10;
  private firstName: string;
  protected age;
  totalMarks;
  static School_Name: string = "Sample School";

  // constructors
  constructor(private stdClass, age, firstName?, totalMarks?) {
    super(firstName);
    this.age = age;
    this.firstName = firstName;
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
  displayState() {

    let a = 10;
    console.log(Student.School_Name);

    console.log(
      this.stdid +
        " : " +
        this.age +
        " : " +
        this.firstName +
        " : " +
        this.stdClass
    );

    super.displayState();

 
  }

  calcMarks() {
    return 10;
}

healthCheck() (
    return true;
)

  //   displayState(disp : boolean) {
  //     console.log(Student.School_Name);

  //     console.log(this.stdid + " : " + this.age + " : " + this.firstName);
  //   }

  static test() {
    console.log("Welcome to Student Class");
  }
}

let primaryStudent: Student = new Student(5, 10, "sasi");

primaryStudent.displayState();

// let primaryStudent1: Student = new Student(6, 10);

// primaryStudent1.displayState();

// Student.test();
