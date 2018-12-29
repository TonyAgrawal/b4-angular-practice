import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-switchsample",
  templateUrl: "./switchsample.component.html",
  styleUrls: ["./switchsample.component.css"]
})
export class SwitchsampleComponent implements OnInit {
  stdCategory = "primary"; //primary or secondary or graduate  & default is pre-school

  

  constructor() {}

  ngOnInit() {}
}
