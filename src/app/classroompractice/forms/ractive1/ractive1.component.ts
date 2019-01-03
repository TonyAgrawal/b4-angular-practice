import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-ractive1",
  templateUrl: "./ractive1.component.html",
  styleUrls: ["./ractive1.component.css"]
})
export class Ractive1Component implements OnInit {
  stdRegistrationForm;

  constructor() {}

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    let nameControl = new FormControl("test", [
      Validators.required,
      Validators.minLength(5)
    ]);
    let dobControl = new FormControl("01-Dec-2018");

    this.stdRegistrationForm = new FormGroup({
      stdName: nameControl,
      stdDob: dobControl
    });
  }

  // handleRegistrStudent() {
  //   console.log(
  //     "Student data : " + JSON.stringify(this.stdRegistrationForm.value)
  //   );

  //   // console.log("Reidtration called " + this.stdRegistrationForm);
  // }

  handleRegistrStudent(data) {
    // console.log("Student data : " + JSON.stringify(data));

    // console.log("Student data : " + JSON.stringify(data.stdName));

    let nameControl = this.stdRegistrationForm.get("stdName");

    console.log(
      "Student Name control State : touched - " +
        nameControl.touched +
        " : untouched " +
        nameControl.untouched
    );

    console.log(
      " dirty - " + nameControl.dirty + " : prestine " + nameControl.prestine
    );

    console.log(
      "Valid " + nameControl.Valid + " : invalid " + nameControl.invalid
    );

    if (this.stdRegistrationForm.invalid) {
      console.log(JSON.stringify(nameControl.errors));
    }

    console.log("Form is valid : " + this.stdRegistrationForm.valid);

    // console.log("Reidtration called " + this.stdRegistrationForm);
  }
}
