import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserFormComponent } from '../user-form/user-form.component';
import { UserAddressComponent } from '../user-address/user-address.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: 'user-form', component: UserFormComponent },
  { path: 'user-address', component: UserAddressComponent },
  { path: '', pathMatch: 'full', redirectTo: 'all' },
];

export const routing = RouterModule.forRoot(appRoutes);

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
