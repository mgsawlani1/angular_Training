import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
username:string = "admin";
password:string = "admin ";
  constructor(private auth:AuthService, private router:Router) { }

  ngOnInit() {
  }
  login(){
    this.auth.setUserName(this.username);
    this.router.navigate(['/products']);
  }
}
