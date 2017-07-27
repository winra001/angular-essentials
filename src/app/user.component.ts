import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: 'app-user',
  template: `
    <input type="text" (input)="onUserInput($event)" [value]="name"/>
    <!--<input type="text" [(ngModel)]="name"/>-->
    <p>Hello {{ name }}!</p>
    <p>I'm the user component</p>
    <app-user-detail></app-user-detail>
  `
})
export class UserComponent {
  // 21. Binding Component Properties
  @Input()
  name;

  // Listening to your Custom Events
  @Output()
  nameChanged = new EventEmitter<string>();

  onUserInput(event) {
    // this.name = event.target.value;
    this.nameChanged.emit(event.target.value);
  }

}
