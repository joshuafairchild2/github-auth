import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

@Injectable()
export class AuthenticationService {
  user: Observable<firebase.User>;

  constructor(
    public ngFireAuth: AngularFireAuth
  ) {
    this.user = ngFireAuth.authState;
  }

  login(): void {
    this.ngFireAuth.auth.signInWithPopup(new firebase.auth.GithubAuthProvider());
  }

  logout(): void {
    this.ngFireAuth.auth.signOut();
  }

}
