import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users: object[];
  constructor(private http: HttpClient) {}
  /* getUsers() {
    // return this.http.get('https://jsonplaceholder.typicode.com/users');
  }*/
  getUsers() {
    return this.http.get<object[]>(
      'https://jsonplaceholder.typicode.com/users'
    );
  }

  getUser(id: number | string) {
    return this.getUsers().pipe(
      // (+) before `id` turns the string into a number
      map((users: User[]) => users.find((item) => item.id === +id))
    );
  }
}
