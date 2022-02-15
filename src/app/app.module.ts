import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserAddressComponent } from './user-address/user-address.component';
import { UserCompanyComponent } from './user-company/user-company.component';
// import { routing } from './app.routing';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: 'user-form/:id', component: UserFormComponent },
  { path: 'user-address/:city', component: UserAddressComponent },
  { path: 'user-company', component: UserCompanyComponent },
  { path: '', pathMatch: 'full', redirectTo: 'all' },
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    //routing,
    RouterModule.forRoot(appRoutes),
  ],
  declarations: [AppComponent, UserFormComponent, UserCompanyComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
