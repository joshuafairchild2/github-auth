import { Component } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthenticationService]
})
export class AppComponent {
  user: Observable<firebase.User>;
  isLoggedIn: boolean;
  displayName: string;

  constructor(
    public authService: AuthenticationService,
    private router: Router
  ) {
    this.authService.user.subscribe(user => {
      if (user == null) {
        this.isLoggedIn = false;
      } else {
        this.isLoggedIn = true;
        this.displayName = user.displayName;
      }
    });
  }

  login(): void {
    this.authService.login();
  }

  logout(): void {
    this.authService.logout();
  }
}
