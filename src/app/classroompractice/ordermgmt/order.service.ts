import { Injectable } from "@angular/core";

@Injectable()
export class OrderService {
  constructor() {}

  displayOrder() {
    console.log("Your order details are ...");
  }
}
