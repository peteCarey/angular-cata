import { Routes, RouterModule } from '@angular/router';

import { UserFormComponent } from './user-form/user-form.component';
import { UserAddressComponent } from './user-address/user-address.component';
import { UserCompanyComponent } from './user-company/user-company.component';

const appRoutes: Routes = [
  { path: 'user-form/:id', component: UserFormComponent },
  { path: 'user-address/:city', component: UserAddressComponent },
  { path: 'user-company', component: UserCompanyComponent },
  { path: '', pathMatch: 'full', redirectTo: 'all' },
];

export const routing = RouterModule.forRoot(appRoutes);
