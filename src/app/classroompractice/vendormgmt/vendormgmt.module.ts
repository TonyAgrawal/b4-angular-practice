import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { OrderService } from "../ordermgmt/order.service";
import { OrdermgmtModule } from "../ordermgmt/ordermgmt.module";
import { ViewvendorComponent } from "./viewvendor/viewvendor.component";
import { RouterModule } from "@angular/router";

const routes = [{ path: "", component: ViewvendorComponent }];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [ViewvendorComponent],
  exports: [ViewvendorComponent],
  providers: []
})
export class VendormgmtModule {}
