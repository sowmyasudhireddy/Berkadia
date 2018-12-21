import { Component, OnInit,Input, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-passbook',
  templateUrl: './passbook.component.html',
  styleUrls: ['./passbook.component.css']
})
export class PassbookComponent implements OnInit, OnChanges{
  @Input() selectedItem: object;
 totalAmount=0;
@Output() changeEmitter= new EventEmitter();
pass=[];


  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(){
    if(Object.keys(this.selectedItem).length>0){
    this.pass.push(this.selectedItem)
    console.log(this.selectedItem['Title']);
    }
  }
  removeBook(books) {
    let index = -1;
    for (let i = 0; i < this.pass.length; i++) {
      console.log(this.pass[i]);
      if (books.name === this.pass[i].name) {
        index = i;
        break;
      }
    }
    this.pass.splice(index, 1);
}
checkout(){
  this.changeEmitter.emit({navigate:true});
}

}
