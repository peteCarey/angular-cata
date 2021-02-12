import { Routes, RouterModule } from '@angular/router';
import { UserAddressComponent } from './user-address/user-address.component';

const appRoutes: Routes = [
  { path: 'addressDetails', component: UserAddressComponent },
  { path: '', pathMatch: 'full', redirectTo: 'all' },
];

export const routing = RouterModule.forRoot(appRoutes);
