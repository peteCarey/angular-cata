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
  private baseUrl = 'https://jsonplaceholder.typicode.com/users';
  users;
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

  constructor(private httpClient: HttpClient) {
    this.httpClient.get(this.baseUrl).subscribe((data) => {
      console.log(data);
      this.users = data;
      console.log(this.users[0]);
      console.log(this.users[1]);
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
