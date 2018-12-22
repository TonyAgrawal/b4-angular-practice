import { Component, OnInit } from "@angular/core";
import { StudentService } from "../student.service";

@Component({
  selector: "app-school",
  templateUrl: "./school.component.html",
  styleUrls: ["./school.component.css"]
})
export class SchoolComponent implements OnInit {
  schoolName = "XYZ Public School";

  constructor(private stdService: StudentService) {
    // console.log("School : Service Function : " + stdService.getStudentList());

    // this.stdService.setStudentID("Student100");

    // console.log("School : Service Function ID : " + stdService.getStudentID());
  }

  ngOnInit() {}
}
