import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BindingsampleComponent } from "./classroompractice/bindingsample/bindingsample.component";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SampleComponent } from "./sample/sample.component";
import { SchoolComponent } from "./classroompractice/school/school.component";
import { StudentComponent } from "./classroompractice/student/student.component";
import { HttpClientModule } from "@angular/common/http";
import { IfsampleComponent } from "./classroompractice/directives/ifsample/ifsample.component";
import { ForsampleComponent } from "./classroompractice/directives/forsample/forsample.component";
import { SwitchsampleComponent } from "./classroompractice/directives/switchsample/switchsample.component";
import { HomeComponent } from "./classroompractice/routing/home/home.component";
import { ContactComponent } from "./classroompractice/routing/contact/contact.component";
import { RouterModule } from "@angular/router";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { Ractive1Component } from "./classroompractice/forms/ractive1/ractive1.component";
import { TemplatesampleComponent } from "./classroompractice/forms/template/templatesample/templatesample.component";
// import { OrdermgmtModule } from "./classroompractice/ordermgmt/ordermgmt.module";
// import { OrderService } from "./classroompractice/ordermgmt/order.service";
// import { VendormgmtModule } from "./classroompractice/vendormgmt/vendormgmt.module";
// import { CreateorderComponent } from "./classroompractice/ordermgmt/createorder/createorder.component";
// import { ViewvendorComponent } from "./classroompractice/vendormgmt/viewvendor/viewvendor.component";

const routes = [
  { path: "home", component: HomeComponent },
  { path: "contact", component: ContactComponent },
  {
    path: "createorder",
    loadChildren:
      "./classroompractice/ordermgmt/ordermgmt.module#OrdermgmtModule"
  },
  {
    path: "showvendor",
    loadChildren:
      "./classroompractice/vendormgmt/vendormgmt.module#VendormgmtModule"
  }
];
@NgModule({
  declarations: [
    AppComponent,
    BindingsampleComponent,
    SampleComponent,
    SchoolComponent,
    StudentComponent,
    IfsampleComponent,
    ForsampleComponent,
    SwitchsampleComponent,
    HomeComponent,
    ContactComponent,
    Ractive1Component,
    TemplatesampleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
  // bootstrap: [StudentComponent]
})
export class AppModule {}
