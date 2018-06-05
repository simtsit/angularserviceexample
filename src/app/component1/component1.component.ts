import { Component, OnInit } from '@angular/core';

import { TimestumpserviceService } from './../timestumpservice.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

	timestump;	
	
  constructor(private timestumpservice: TimestumpserviceService) { }


  ngOnInit() {
	
  	 this.timestump = this.timestumpservice.getDate();
  }

}
