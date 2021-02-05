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
  constructor(private userservice: UserService) {}
  ngOnInit() {
    this.users = this.userservice.getUsers();
    console.info(this.users);
  }
  //users = [];
  // id: any;

  eMails = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];

  model = new User(18, 'Dr IQ', this.eMails[0], 'Chuck Overstreet');

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

  newUser() {
    this.model = new User(42, '', '');
  }
}
