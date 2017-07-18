import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { User } from 'firebase';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css']
})
export class PublicComponent {
  private user: User;

  constructor() { }

  ngDoCheck() {
    this.user = firebase.auth().currentUser;
  }

}
