import { Routes, RouterModule } from '@angular/router';
import { UserAddressComponent } from './user-address/user-address.component';

const appRoutes: Routes = [
  { path: 'user-address', component: UserAddressComponent },
  { path: '', pathMatch: 'full', redirectTo: 'all' },
];

@NgModule({
  declarations: [UserAddressComponent],
  imports: [routing],
  providers: [],
  bootstrap: [],
})
export const routing = RouterModule.forRoot(appRoutes);
