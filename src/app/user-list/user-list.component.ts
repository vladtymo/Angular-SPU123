import { Component } from '@angular/core';
import { IUser, USERS_MOCK } from '../user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {

  users: IUser[] = USERS_MOCK;

  sortUsersByName(): void {
    this.users.sort((a, b) => a.username.localeCompare(b.username));
  }

  removeUser(user: IUser): void {
    const index = this.users.indexOf(user);
    if (index == -1) return;

    this.users.splice(index, 1);
  }

  addUser(user: IUser): void {
    this.users.push(user);
  }
}
