import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../user';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent implements OnInit {
  private baseUrl = 'https://jsonplaceholder.typicode.com/users';
  //users = [];
  // users: any;
  /*
  constructor(private http: HttpClient) {}

  getUser(id: number): Observable<any> {
    console.log('test');
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createUser(user: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, user);
  }
*/
  users: any = [];
  id: any;
  constructor(public httpClient: HttpClient) {}

  ngOnInit() {
    this.httpClient
      .get(this.baseUrl)
      //  .pipe(map((data) => {}))
      .subscribe((data) => {
        this.users = data;
        //console.log(data);
        // this.users.push(data);
        // console.log(this.users[0].id);
        // this.id = this.users[0].id;
        console.log(this.users);
      });
  }

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
