import { Component, EventEmitter, Output } from '@angular/core';
import { IUser } from '../user';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {

  @Output() addEvent = new EventEmitter<IUser>();

  user: IUser = {
    id: 1000,
    username: '',
    email: '',
    isAdmin: false
  };

  addUser(): void {
    // invoke event ant put user parameter
    this.addEvent.emit({
      ...this.user
    });
  }
}
