import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  focus;
  focus1;
  constructor(public authService: AuthService) { }

  ngOnInit() {
  }
  login(email, password){
    console.log("works")
    debugger;
    this.authService.SignIn(email, password)
  }
}
