import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

import { UserService } from '../user.service';
import { User } from '../user';
import { UserFormComponent } from '../user-form/user-form.component';

@Component({
  selector: 'app-user-address',
  templateUrl: './user-address.component.html',
  styleUrls: ['./user-address.component.css'],
})
export class UserAddressComponent implements OnInit {
  user$: Observable<User>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userservice: UserService,
    private userformcomponent: UserFormComponent
  ) {}

  ngOnInit() {
    this.userformcomponent.data$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.userservice.getUser(params.get('id'))
      )
    );
  }

  gotoUsers(item: User) {
    const userId = item ? item.id : null;
    this.router.navigate(['/users', { id: itemId }]);
  }
}
