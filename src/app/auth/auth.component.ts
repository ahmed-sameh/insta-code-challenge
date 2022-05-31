import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  @ViewChild('loginForm') LoginForm!: NgForm;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onLogin() {
    let email = this.LoginForm.value.email;
    let password = this.LoginForm.value.password;
    console.log(this.authService.login(email, password))
    
  }
}
