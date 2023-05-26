import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.page.html',
  styleUrls: ['./user-page.page.scss'],
})
export class UserPagePage implements OnInit {
  loginURL: string;
  userInfo: string;
  constructor(public auth: AuthService) {
    this.loginURL = auth.build_login_link('/tabs/drink-menu');
  }

  ngOnInit() {
    if (this.auth.payload) {
      this.userInfo = this.auth.payload['user-email'];
    }
  }
}
