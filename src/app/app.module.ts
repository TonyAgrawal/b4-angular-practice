import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BindingsampleComponent } from "./classroompractice/bindingsample/bindingsample.component";

import { FormsModule } from "@angular/forms";
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
<<<<<<< HEAD
    StudentComponent,
    IfsampleComponent,
    ForsampleComponent,
    SwitchsampleComponent,
    HomeComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
=======
    StudentComponent

>>>>>>> e5e9b82962b873dd7066e82f242284e788faaaa2
  ],
  providers: [],
  bootstrap: [AppComponent]
  // bootstrap: [StudentComponent]
})
export class AppModule {}
