import { Component } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PROJECT DETAILS';
  public projectList= [];
  public options = [];
  public studentData= [];
  public displayProject: boolean=false;
  public displaystudent: boolean=false;
  public value: string = "default";
  constructor(private todoservice: TodoService)
   {
    this.options = this.todoservice.getOptionsData();
    this.projectList = this.todoservice.getProjectData();
    this.studentData = this.todoservice.getStudentsData();
  }
  displayData(option) {
   console.log(option);
    this.value = option;
    if (option == "projectdetails") {
      this.displayProject = true;
      this.displaystudent = false;
    }
    if (option == "studentsdetails") {
      this.displayProject = false;
      this.displaystudent = true;
    }

  }

}
