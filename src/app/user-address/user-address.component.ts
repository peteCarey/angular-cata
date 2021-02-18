import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-user-address',
  templateUrl: './user-address.component.html',
  styleUrls: ['./user-address.component.css'],
})
export class UserAddressComponent implements OnInit {
  users$: Observable<User>;
  users;
  data;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private userservice: UserService
  ) {}

  ngOnInit() {
    this.users = this.userservice.getUsers();

    this.users.subscribe((res) => {
      this.data = res;
    });
    /*this.activatedRoute.paramMap
      .subscribe(paramMap => {
        this.
      })
    */
    /* this.users$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.userservice.getUser(params.get('id'))
      )
    );*/
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    // this.users$ = this.userservice.getUser(id);
  }
  /*
  gotoUsers(item: User) {
    const userId = item ? item.id : null;
    this.router.navigate(['/user-form', { id: item }]);
  }
  */
  gotoUsers() {
    this.router.navigate(['/']);
  }
  back() {
    this.router.navigate(['/']);
  }
}
