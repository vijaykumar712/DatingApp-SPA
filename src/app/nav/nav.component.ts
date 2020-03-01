import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/Auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};
  constructor(public authService: AuthService,private alertify:AlertifyService) { }

  ngOnInit() {
  }
  login() {
    this.authService.login(this.model)
      .subscribe(arg => {
        this.alertify.success('Succesfully Logged in');
      },
      error => {
        this.alertify.error(error);
      });

  }

  loggedIn() {
   return this.authService.loggedIn();
  }

  logOut() {
    localStorage.removeItem('token');
    this.alertify.message('logged out');
  }
}
