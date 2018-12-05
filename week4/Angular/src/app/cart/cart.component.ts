import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnChanges{
@Input() selectedItem: object;
 totalAmount=0;
@Output() changeEmitter= new EventEmitter();

cart =[];
  constructor() { }

  ngOnInit() {
  }
ngOnChanges(){
  if(Object.keys(this.selectedItem).length>0){
  this.cart.push(this.selectedItem)
  console.log(this.selectedItem['price']);
   this.totalAmount+=this.selectedItem['price'];
  }
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
  this.totalAmount -= item.price;
  
  // this.amountChangeEmitter.emit(this.totalAmount+'');
}
checkout(){
  this.changeEmitter.emit({navigate:true,amount:this.totalAmount});
}

}
