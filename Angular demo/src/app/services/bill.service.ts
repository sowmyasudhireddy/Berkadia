import { Injectable } from '@angular/core';


@Injectable()
export class BillService {
  bill_amount: number;
  constructor() {
  }

  getBillAmount() {
    return this.bill_amount;
  }

  setBillAmount(amount) {
    this.bill_amount = amount;
  }
}
