import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent {
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
