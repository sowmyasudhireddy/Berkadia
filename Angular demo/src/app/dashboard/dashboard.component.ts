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

  constructor(private router: Router, private billService: BillService) {
    this.grocery_items = grocery_items;
  }

  ngOnInit() {
  }

  addToCart(item) {
    this.cart.push(item);
    this.total += item.price;
  }

  removeItem(item) {
    let index = -1;
    for (let i = 0; i < this.cart.length; i++) {
      console.log(this.cart[i]);
      if (item.name === this.cart[i].name) {
        index = i;
        break;
      }
    }
    this.cart.splice(index, 1);
    this.total -= item.price;
  }

  checkout() {
    this.billService.setBillAmount(this.total);
    this.router.navigate(['/payment']);
  }


}
