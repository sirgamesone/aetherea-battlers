import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../service/auth.service';

@Component({
  selector: 'aet-logged-user-info',
  templateUrl: './logged-user-info.component.html',
  styleUrls: ['./logged-user-info.component.scss']
})
export class LoggedUserInfoComponent implements OnInit {

  constructor(public authService: AuthService) {
  }

  ngOnInit(): void {
  }
}
