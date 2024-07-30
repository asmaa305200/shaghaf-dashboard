import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { OffersComponent } from './components/offers/offers.component';
import { AdsComponent } from './components/ads/ads.component';
import { AccountsComponent } from './components/accounts/accounts.component';
import { ProductsComponent } from './components/products/products.component';
import { BirthdayComponent } from './components/birthday/birthday.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    OffersComponent,
    AdsComponent,
    AccountsComponent,
    ProductsComponent,
    BirthdayComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule
    , ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
