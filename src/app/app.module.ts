import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { UserFormComponent } from './user-form/user-form.component';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { FormsModule } from '@angular/forms';
import { UserAddressComponent } from './user-address/user-address.component';
import { UsersModule } from './users/users.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    UsersModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    UserFormComponent,
    UserAddressComponent,
    PageNotFoundComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [UserAddressComponent],
})
export class AppModule {}
