import { Injectable } from '@angular/core';

@Injectable()
export class TimestumpserviceService {

  constructor() { }
  getDate() {
  	let theDate = new Date();
  	return theDate;
  }



}
