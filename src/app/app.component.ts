import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Angular Router Example!';
  subheader = 'The date timestump is shared among components 1 and 2 while component 3 has a different value for the same variable!';
  
}
