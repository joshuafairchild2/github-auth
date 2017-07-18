import { Component, OnInit } from '@angular/core';
import { AuthGuard } from './../auth-guard.service';


@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.css']
})
export class PrivateComponent {

  constructor(
    private authGuard: AuthGuard
  ) { }

  ngDoCheck() {
    this.authGuard.canActivate();
  }

}
