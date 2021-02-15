import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserAddressComponent } from './user-address/user-address.component';

// import { routing } from './app.routing';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: 'user-address', component: UserAddressComponent },
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
  declarations: [AppComponent, UserFormComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
