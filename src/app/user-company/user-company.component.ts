import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-company',
  templateUrl: './user-company.component.html',
  styleUrls: ['./user-company.component.css'],
})
export class UserCompanyComponent implements OnInit {
  users;
  data;
  constructor(private userservice: UserService) {}

  ngOnInit() {
    this.users = this.userservice.getUsers();

    this.users.subscribe((res) => {
      this.data = res;
    });
  }
}
