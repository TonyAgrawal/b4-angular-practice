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
import { RouterModule} from "@angular/router";
import { Ractive1Component } from './classroompractice/forms/ractive1/ractive1.component';
import { TemplatesampleComponent } from './classroompractice/forms/template/templatesample/templatesample.component';

const routes = [
  { path: "home", component: HomeComponent },
  { path: "contact", component: ContactComponent }
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
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
  // bootstrap: [StudentComponent]
})
export class AppModule {}
