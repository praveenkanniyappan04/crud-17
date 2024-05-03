import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'register';
  userName: any
  userList: any;
  receivedData: any;
  receivedData1: any;
  constructor(private router: Router, private auth: AuthService) { }
  ngOnInit(): void {
  }
  isLoggedIn() {
    this.userName = sessionStorage.getItem('userName')
    return sessionStorage.getItem('buttonEnabled') === 'true';
  }
  logout() {
    sessionStorage.clear()
    this.router.navigate([''])
  }
  
}
