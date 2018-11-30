import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { credentials } from '../mock-data/login_data';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(private router: Router) { }
  ngOnInit() {

  }

  checkLogin() {
    if (credentials.username === this.username && credentials.password === this.password) {
      this.router.navigate(['/dashboard']);
    } else {
      alert('Invalid username/password');
    }
  }

}

// login component
