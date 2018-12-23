import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-bindingsample",
  templateUrl: "./bindingsample.component.html",
  styleUrls: ["./bindingsample.component.css"]
})
export class BindingsampleComponent implements OnInit {
  totalAmount = 4500;

  stdName = "Sasi";

  subject = "English";

  marks = "300";

  constructor() {}

  ngOnInit() {}

  hableSubjectChange(event) {
    console.log("Changed Value : " + event.target.value);
    this.subject = event.target.value;
  }
}
