import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { AdsComponent } from './components/ads/ads.component';
import { AccountsComponent } from './components/accounts/accounts.component';
import { OffersComponent } from './components/offers/offers.component';
import { BirthdayComponent } from './components/birthday/birthday.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  { path: '', component: SideNavComponent },
  { path: 'ads', component: AdsComponent },
  { path: 'accounts', component: AccountsComponent },
  { path: 'offers', component: OffersComponent },
  { path: 'birthday', component: BirthdayComponent },
  { path: 'products', component: ProductsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
