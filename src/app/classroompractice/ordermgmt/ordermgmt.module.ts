import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CreateorderComponent } from "./createorder/createorder.component";
import { MyorderDirective } from "./myorder.directive";
import { ReversePipe } from "./reverse.pipe";
import { OrderService } from "./order.service";
import { OfferdetailsComponent } from "./offerdetails/offerdetails.component";
import { RouterModule } from "@angular/router";

const routes = [{ path: "", component: CreateorderComponent }];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [
    CreateorderComponent,
    MyorderDirective,
    ReversePipe,
    OfferdetailsComponent
  ],
  exports: [ReversePipe, CreateorderComponent],
  providers: [OrderService]
})
export class OrdermgmtModule {}
