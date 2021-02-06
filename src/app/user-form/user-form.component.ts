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
  constructor(private userservice: UserService) {}
  ngOnInit() {
    this.users = this.userservice.getUsers();
    console.info(this.users);
    this.users.subscribe((res) => {
      console.log(res);
      this.data = res;
      console.log(this.data);
    });
  }
  //users = [];
  // id: any;
  // dummy data for model and emails - need to inject a data service
  // to get and save real data, or expose those properties as inputs and outputs.
  eMails = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];

  model = new User(
    'Dr IQ',
    this.eMails[0],
    'Chuck Overstreet',
    '123456',
    'google.co.uk'
  );

  submitted = false;

  onSubmit() {
    this.submitted = true;
    console.log(this.model);
  }

  newUser() {
    this.model = new User('', '', '', '', '');
  }
}
