import { Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-templatesample",
  templateUrl: "./templatesample.component.html",
  styleUrls: ["./templatesample.component.css"]
})
export class TemplatesampleComponent implements OnInit {
  curOrder;

  constructor() {
    this.curOrder = new Order();
  }

  ngOnInit() {}

  handleCreateOrder() {
    console.log("Create Order called :  " + JSON.stringify(this.curOrder));
  }
}

class Order {
  orderId = 100;
  orderDescription;
  orderDate;
  orderItems;
}
