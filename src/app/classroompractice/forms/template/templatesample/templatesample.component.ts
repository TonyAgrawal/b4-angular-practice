import { Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { OrderService } from "src/app/classroompractice/ordermgmt/order.service";

@Component({
  selector: "app-templatesample",
  templateUrl: "./templatesample.component.html",
  styleUrls: ["./templatesample.component.css"]
})
export class TemplatesampleComponent implements OnInit {
  curOrder;

  constructor(private orderSvc: OrderService) {
    this.curOrder = new Order();
  }

  ngOnInit() {
    this.orderSvc.displayOrder();
  }

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
