import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  rootName = 'Daniel Ra';

  // 22. Listening to your Custom Events
  onNameChanged(newName) {
    this.rootName = newName;
  }

}
