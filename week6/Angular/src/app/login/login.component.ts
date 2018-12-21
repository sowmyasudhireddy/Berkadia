import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {logindetails } from '../mock-data/login_data';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string;
  password:string;

  constructor(private router:Router) { }

  ngOnInit() {
  }
  checkLogin(){
    if(logindetails.username==this.username && logindetails.password==this.password){
      localStorage.setItem('loggedin','true');
      this.router.navigate(['/dashboard']);
    }
    else{
      alert('please check your login details');
    }

  }

}
