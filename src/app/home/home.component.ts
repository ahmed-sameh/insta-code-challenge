import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  username = 'ahmed5Sameh@instabug.com';
  authSub!:Subscription;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authSub = this.authService.userAuthenticated.subscribe({
      next: user => {
        if(user) {
          this.username = user.email
        }
      }
    })
  }

  onLogout() {
    this.authService.logout()
  }

  ngOnDestroy(): void {
      this.authSub.unsubscribe()
  }
}
