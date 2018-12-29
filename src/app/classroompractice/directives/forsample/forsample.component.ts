import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-forsample",
  templateUrl: "./forsample.component.html",
  styleUrls: ["./forsample.component.css"]
})
export class ForsampleComponent implements OnInit {
  studentList = [
    { stdid: 10, stdName: "sasi", stdDob: "10-Dec-15" },
    { stdid: 11, stdName: "sarat", stdDob: "10-Dec-15" },
    { stdid: 12, stdName: "John", stdDob: "10-Dec-15" },
    { stdid: 13, stdName: "David", stdDob: "10-Dec-15" }
  ];

  constructor() {}

  ngOnInit() {}
}
