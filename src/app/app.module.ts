import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { UserFormComponent } from './user-form/user-form.component';

import { FormsModule } from '@angular/forms';
import { UserAddressComponent } from './user-address/user-address.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [AppComponent, UserFormComponent, UserAddressComponent, PageNotFoundComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
