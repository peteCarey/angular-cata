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

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userservice: UserService
  ) {}

  ngOnInit() {
    /* this.users$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.userservice.getUser(params.get('id'))
      )
    );*/
    const id = this.route.snapshot.paramMap.get('id');

    // this.users$ = this.userservice.getUser(id);
  }

  gotoUsers(item: User) {
    const userId = item ? item.id : null;
    this.router.navigate(['/users', { id: item }]);
  }
}
