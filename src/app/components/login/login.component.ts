import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../service/auth.service';

@Component({
  selector: 'aet-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public authService: AuthService) {
  }

  ngOnInit(): void {
  }

  executeLogin(): void {
    this.authService.login();
  }

  executeLogout(): void {
    this.authService.logout();
  }

}
