import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PasswordMatchDirective } from './_validators';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { OrderComponent } from './order/order.component';
import { CartListComponent } from './cart-list/cart-list.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { SuccessComponent } from './success/success.component';
import { MedicineListComponent } from './medicine-list/medicine-list.component';
import { MedicineDetailsComponent } from './medicine-details/medicine-details.component';
import { MedicineAddComponent } from './medicine-add/medicine-add.component';
import { MedicineUpdateComponent } from './medicine-update/medicine-update.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryDetailsComponent } from './category-details/category-details.component';
import { CategoryAddComponent } from './category-add/category-add.component';
import { CategoryUpdateComponent } from './category-update/category-update.component';

@NgModule({
  declarations: [
    MainComponent,
    HomeComponent,
    RegisterComponent,
    PasswordMatchDirective,
    LoginComponent,
    OrderComponent,
    CartListComponent,
    CheckoutComponent,
    SuccessComponent,
    MedicineListComponent,
    MedicineDetailsComponent,
    MedicineAddComponent,
    MedicineUpdateComponent,
    CategoryListComponent,
    CategoryDetailsComponent,
    CategoryAddComponent,
    CategoryUpdateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [MainComponent],
})
export class AppModule {}
