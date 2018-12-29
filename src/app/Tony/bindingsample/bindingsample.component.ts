import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bindingsample',
  templateUrl: './bindingsample.component.html',
  styleUrls: ['./bindingsample.component.css']
})
export class BindingsampleComponent implements OnInit {
   studentId=30;
   subject="abc" ;
   
  constructor() { }
  
  ngOnInit() {
  }
  
  

}
