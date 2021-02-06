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
  // dummy data for model and emails - need to inject a data service
  // to get and save real data, or expose those properties as inputs and outputs.
  eMails = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];

  model = new User(
    18,
    'Dr IQ',
    this.eMails[0],
    'Chuck Overstreet',
    '123456',
    'google.co.uk'
  );

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

  newUser() {
    this.model = new User(42, '', '', '', '', '');
  }
}
