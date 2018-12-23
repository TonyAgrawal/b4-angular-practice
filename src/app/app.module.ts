import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
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

  ],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
  // bootstrap: [StudentComponent]
})
export class AppModule {}
