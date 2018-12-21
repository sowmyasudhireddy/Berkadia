import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.css']
})
export class IssueComponent implements OnInit {
  RollNo: string;
  StudentName: string;
  Bookid: number;

  constructor(private router: Router) { }

  ngOnInit() {
  }
  issueNow() {
    alert('Isuue Successul !!');
    this.router.navigate(['/dashboard']);
  }
}
