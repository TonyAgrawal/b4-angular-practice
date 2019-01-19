import { Component, OnInit } from "@angular/core";
import {
  trigger,
  state,
  style,
  transition,
  animate
} from "@angular/animations";

@Component({
  selector: "app-animation1",
  templateUrl: "./animation1.component.html",
  styleUrls: ["./animation1.component.css"],
  animations: [
    trigger("divanim", [
      state("state1", style({ backgroundColor: "red", opacity: 0 })),
      state("state2", style({ backgroundColor: "blue", opacity: 1 })),
      // transition("* => state2", animate("3000ms")),
      // transition("state2 => state1", animate("1000ms"))
      transition("* => *", animate("3000ms"))
    ])
  ]
})
export class Animation1Component implements OnInit {
  // transition : state1 ==> state2  & state2 ==> state1
  divState = "steady";

  constructor() {}

  ngOnInit() {}

  toggleState() {
    console.log("state before toggle : " + this.divState);
    this.divState =
      this.divState == "state1" || this.divState == "steady"
        ? "state2"
        : "state1";
    console.log("state post toggle : " + this.divState);
  }

  steadyState() {
    this.divState = "steady";
  }
}
