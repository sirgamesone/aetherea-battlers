import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../service/auth.service';

@Component({
  selector: 'aet-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


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
