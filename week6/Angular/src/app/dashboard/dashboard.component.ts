import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { books_data } from '../mock-data/book_data';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  books_data = [];
  pass = [];
  books = {};


  constructor(private router: Router) { 
    this.books_data=books_data;
  }

  ngOnInit() {

  }
  addToPassbook(selectedItem) {
    this.pass.push(selectedItem);
    this.books = selectedItem;
    console.log(selectedItem);
  }
  selectedBook(){
    alert("a book is selected");
  }
   navigateToCheckout(value) {
     if (value.navigate) {
       this.router.navigate(['/issue']);

  }
   }
}
