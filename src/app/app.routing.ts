import { Routes, RouterModule } from '@angular/router';
import { UserAddressComponent } from './user-address/user-address.component';
import { UserFormComponent } from './user-form/user-form.component';
const appRoutes: Routes = [
  { path: 'user-form', component: UserFormComponent },
  { path: 'user-address', component: UserAddressComponent },
  { path: '', pathMatch: 'full', redirectTo: 'all' },
];

export const routing = RouterModule.forRoot(appRoutes);
