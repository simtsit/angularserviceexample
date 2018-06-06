import { Component, OnInit } from '@angular/core';

import { TimestumpserviceService } from './../timestumpservice.service';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  constructor(private timestumpservice: TimestumpserviceService) { }

  ngOnInit() {
 	  	 this.timestump = this.timestumpservice.getDate();
  }

}
