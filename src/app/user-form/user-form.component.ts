import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent implements OnInit {
  users;
  data;
  // id: number;
  lastIndex: number;

  constructor(private userservice: UserService) {}
  ngOnInit() {
    this.lastIndex = 0;
    this.users = this.userservice.getUsers();
    this.users.subscribe((res) => {
      this.data = res;
    });
  }

  model = new User(0, '', '', '', '', '', '', '');
  submitted = false;
  newRow = [];
  fullRow = [];
  userId: string;
  dataSize: number;

  onSubmit() {
    this.submitted = true;
    this.dataSize = this.data.length;
    this.lastIndex = this.dataSize + 1;
    this.userId = 'id: ' + this.lastIndex;
    this.data[this.lastIndex - 1] = this.model; //adds the new user
    this.data[this.dataSize].id = this.lastIndex; // replace id 0 with last index
    console.log(this.data);
  }

  newUser() {
    this.model = new User(this.lastIndex, '', '', '', '', '', '', '');
  }

  editUser() {
    // To do
  }
}
