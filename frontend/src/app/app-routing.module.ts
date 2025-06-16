import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { ContactComponent } from './components/contact/contact.component';
import { PaymentsComponent } from './components/payments/payments.component';

const routes: Routes = [
  { path: 'main', component: HomeComponent },
  { path: 'koszyk', component: CartComponent },
  { path: 'contact', component: ContactComponent},
  { path: 'payment', component: PaymentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
