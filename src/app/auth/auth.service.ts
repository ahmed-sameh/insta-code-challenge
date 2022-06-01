import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject } from "rxjs";
import { User } from "../user.model";

@Injectable({providedIn: 'root'})
export class AuthService {
  users = [
    { email: 'test@test.com', password: '123456' },
    { email: 'mohamed@instabug.com', password: 'A12345678' },
    { email: 'mohamed1@instabug.com', password: 'A12345678' },
    { email: 'mohamed2@instabug.com', password: 'A12345678' },
    { email: 'mohamed3@instabug.com', password: 'A12345678' },
    { email: 'mohamed4@instabug.com', password: 'A12345678' },
    { email: 'mohamed5@instabug.com', password: 'A12345678' },
    { email: 'mohamed6@instabug.com', password: 'A12345678' },
    { email: 'mohamed7@instabug.com', password: 'A12345678' },
  ];

  userAuthenticated = new BehaviorSubject<User | null>(null);
  userInLogMood = false;

  constructor(private router: Router){}
  
  login(email: string, password: string) {
    let isAuthenticated = false;

    this.users.forEach(user => {
      if(user.email === email && user.password === password) {
        isAuthenticated = true;
      }
    })

    if(isAuthenticated) {
      let user = new User(email, password);
      this.userAuthenticated.next(user);
      localStorage.setItem("userData", JSON.stringify(user));
      this.router.navigate(['/home']);
      this.userInLogMood = true;
    }else {
      this.userAuthenticated.next(null);
      this.userInLogMood = false;
    }
  }
  
  autoLogin() {
    const userData: {email: string,  password: string} = JSON.parse(localStorage?.getItem('userData')!);
    if(!userData) {
      return;
    }
    
    const loadedUser = new User(userData.email, userData.password);
    this.userAuthenticated.next(loadedUser);
    this.userInLogMood = true;
  }

  logout() {
    this.userAuthenticated.next(null);
    this.router.navigate(['/login']);
    localStorage.removeItem('userData');
  }
}