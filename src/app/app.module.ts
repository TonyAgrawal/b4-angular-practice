import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

<<<<<<< HEAD
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BindingsampleComponent } from './Tony/bindingsample/bindingsample.component';
import { FormsModule } from "@angular/forms";
@NgModule({
  declarations: [
    AppComponent,
    BindingsampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,
=======
import { AppComponent } from "./app.component";
import { BindingsampleComponent } from "./classroompractice/bindingsample/bindingsample.component";

import { FormsModule } from "@angular/forms";
import { SampleComponent } from "./sample/sample.component";
import { SchoolComponent } from "./classroompractice/school/school.component";
import { StudentComponent } from "./classroompractice/student/student.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    BindingsampleComponent,
    SampleComponent,
    SchoolComponent,
    StudentComponent
>>>>>>> cf8115d7c94af468d5a0a54ffc2ec848ea27ce1c
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
  // bootstrap: [StudentComponent]
})
export class AppModule {}
