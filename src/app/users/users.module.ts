import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UserFormComponent } from '../user-form/user-form.component';
import { UserAddressComponent } from '../user-address/user-address.component';
import { UsersRoutingModule } from '../users-routing/users-routing.module';

@NgModule({
  imports: [CommonModule, FormsModule, UsersRoutingModule],
  declarations: [UserFormComponent, UserAddressComponent],
})
export class UsersModule {}
