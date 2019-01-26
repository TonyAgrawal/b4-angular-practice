import { Component, OnInit } from "@angular/core";
import { OrderService } from "../order.service";

@Component({
  selector: "app-offerdetails",
  templateUrl: "./offerdetails.component.html",
  styleUrls: ["./offerdetails.component.css"]
})
export class OfferdetailsComponent implements OnInit {
  constructor(private orderSvc: OrderService) {}

  ngOnInit() {
    this.orderSvc.displayOrder();
  }
}
