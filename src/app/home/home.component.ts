import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  username = 'ahmed5Sameh@instabug.com'
  constructor() { }

  ngOnInit(): void {
  }

  onLogout() {
    
  }
}
