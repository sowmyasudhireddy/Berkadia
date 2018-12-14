import { Component } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PROJECT DETAILS';
  public displayList: [];
  public studentlist: [];
  public options = [];
  public displayProject: boolean;
  public displaystudent: boolean;
  public value: string = "default";
  constructor(todoservice: TodoService) {
    this.options = todoservice.getOptionsData();
    this.displayList = todoservice.getTodoList();
    //this.studentlist = todoservice.getStudentsData();

  }
  displayData(option) {
    this.value = option;
    if (option == "projectdetails") {
      this.displayProject = true;
    }
    if (option == "studentdetails") {
      this.displaystudent = true;
    }

  }

}
