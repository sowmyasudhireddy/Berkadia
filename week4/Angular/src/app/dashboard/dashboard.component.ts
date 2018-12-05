import { Component, OnInit } from '@angular/core';
import { grocery_items } from '../mock-data/grocery_data';
import { Router } from '@angular/router';
import { BillService } from '../services/bill.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  grocery_items = [];
  cart = [];
  total = 0;
  item = {};

  constructor(private router: Router, private billService: BillService) {
    this.grocery_items = grocery_items;
  }

  ngOnInit() {
  }

  addToCart(selectedItem) {
    //this.cart.push(item);
    this.item = selectedItem;
    this.total += selectedItem.price;
    console.log("parent " + this.total);
  }
  changeAmount(changedAmount) {
    this.total = changedAmount;

  }


  navigateToCheckout(value) {
    if (value.navigate) {
      this.billService.setBillAmount(value.amount);
      this.router.navigate(['/payment']);

    }
  }

}
