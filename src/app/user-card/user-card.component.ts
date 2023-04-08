import { Component, Input } from '@angular/core';
import { IUser } from '../user';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent {

  // user: IUser = {
  //   id: 2233,
  //   username: "vladytmo",
  //   email: "wladnaz@ukr.net",
  //   address: "Rivne, Ukraine"
  // };

  @Input() // allows to put this parameter from the parent component
  user: IUser = {
    id: 0,
    username: '',
    email: '',
    isAdmin: false
  };
}
