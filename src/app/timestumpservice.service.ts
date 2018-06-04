import { Injectable } from '@angular/core';

@Injectable()
export class TimestumpserviceService {

  constructor() { }
  now() {
  	let timestump = new Date();
  	return timestump;
  }



}
