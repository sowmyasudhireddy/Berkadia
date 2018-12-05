import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PaymentComponent } from './payment/payment.component';
import { NavigationComponent } from './navigation/navigation.component';
import { BillService } from './services/bill.service';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PaymentComponent,
    NavigationComponent,
    CartComponent
  ],
  imports: [
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [BillService],
  bootstrap: [AppComponent]
})
export class AppModule { }
