import { Component, OnInit } from '@angular/core';
import { BillService } from '../services/bill.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  cardNo: string;
  nameOnCard: string;
  cvv: number;
  amount: number;

  constructor(private billService: BillService, private router: Router) {
    this.amount = this.billService.getBillAmount();
  }

  ngOnInit() {
  }

  payNow() {
    alert('Payment Successul !!');
    this.router.navigate(['/dashboard']);
  }

}
