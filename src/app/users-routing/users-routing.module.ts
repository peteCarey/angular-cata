import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserFormComponent } from '../user-form/user-form.component';
import { UserAddressComponent } from '../user-address/user-address.component';

const usersRoutes: Routes = [
  { path: 'users', component: UserFormComponent },
  { path: 'user/:id', component: UserAddressComponent },
];

@NgModule({
  imports: [RouterModule.forChild(usersRoutes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
{
}
