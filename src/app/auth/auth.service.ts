import { Injectable } from "@angular/core";

Injectable()
export class AuthService {
  users = [
    // { email: 'test@test.com', password: '123456' },
    { email: 'mohamed@instabug.com', password: 'A12345678' },
    { email: 'mohamed1@instabug.com', password: 'A12345678' },
    { email: 'mohamed2@instabug.com', password: 'A12345678' },
    { email: 'mohamed3@instabug.com', password: 'A12345678' },
    { email: 'mohamed4@instabug.com', password: 'A12345678' },
    { email: 'mohamed5@instabug.com', password: 'A12345678' },
    { email: 'mohamed6@instabug.com', password: 'A12345678' },
    { email: 'mohamed7@instabug.com', password: 'A12345678' },
  ]

  constructor(){}

  login(email: string, password: string) {
    let userAuthenticated = false;

    this.users.forEach(user => {
      if(user.email === email && user.password === password) {
        userAuthenticated = true;
      }
    })

    return userAuthenticated
  }
}