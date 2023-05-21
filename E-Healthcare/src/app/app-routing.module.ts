import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { OrderComponent } from './order/order.component';
import { CartListComponent } from './cart-list/cart-list.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { SuccessComponent } from './success/success.component';
import { AuthguardService } from './services/authguard.service';
import { MedicineListComponent } from './medicine-list/medicine-list.component';
import { MedicineDetailsComponent } from './medicine-details/medicine-details.component';
import { MedicineAddComponent } from './medicine-add/medicine-add.component';
import { MedicineUpdateComponent } from './medicine-update/medicine-update.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryDetailsComponent } from './category-details/category-details.component';
import { CategoryAddComponent } from './category-add/category-add.component';
import { CategoryUpdateComponent } from './category-update/category-update.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'order', component: OrderComponent, canActivate: [AuthguardService] },
  {
    path: 'cart-list',
    component: CartListComponent,
    canActivate: [AuthguardService],
  },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'success', component: SuccessComponent },
  { path: 'medicine-list', component: MedicineListComponent },
  { path: 'medicine-details', component: MedicineDetailsComponent },
  { path: 'medicine-details/:id', component: MedicineDetailsComponent },
  { path: 'medicine-add', component: MedicineAddComponent },
  { path: 'medicine-update', component: MedicineUpdateComponent },
  { path: 'medicine-update/:id', component: MedicineUpdateComponent },
  { path: 'category-list', component: CategoryListComponent },
  { path: 'category-details', component: CategoryDetailsComponent },
  { path: 'category-details/:id', component: CategoryDetailsComponent },
  { path: 'category-add', component: CategoryAddComponent },
  { path: 'category-update', component: CategoryUpdateComponent },
  { path: 'category-update/:id', component: CategoryUpdateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
