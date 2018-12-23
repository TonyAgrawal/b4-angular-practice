import { Component, OnInit, Input } from "@angular/core";
import { StudentService } from "../student.service";
import { UserService } from "../user.service";

@Component({
  selector: "app-student",
  templateUrl: "./student.component.html",
  styleUrls: ["./student.component.css"]
})
export class StudentComponent implements OnInit {
  @Input()
  schoolName: any;
  stdId = 100;
  stdName = "Sarath";

  stdList;
  userList;

  constructor(
    private stdService: StudentService,
    private userService: UserService
  ) {
    // console.log("Student : Service Function : " + stdService.getStudentList());
    // this.stdService.setStudentID("Student100");
    // console.log("Student : Service Function ID : " + stdService.getStudentID());
  }

  ngOnInit() {
    this.stdList = this.stdService.getStudentList();
    console.log("Stuent List : " + JSON.stringify(this.stdList));

    this.loadUser();
  }

  loadUser() {
    console.log("User fetch User list called - start");

    this.userService.getUserList().subscribe(data => {
      console.log("User Data received");
      this.userList = data;
    });

    console.log("User fetch User list called - end");
  }
}
