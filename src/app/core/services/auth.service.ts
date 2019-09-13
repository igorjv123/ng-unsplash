import { Injectable } from '@angular/core';
import Unsplash from 'unsplash-js';
import {ACCESS_KEY, SECRET_KEY} from './api.config';
import {AngularFireAuth} from '@angular/fire/auth';
import {auth} from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user = null;

  constructor(public afAuth: AngularFireAuth) { }

  authUser() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
      .then(user => {
        this.user = user.user;
        console.log(this.user);
        console.log(this.afAuth.auth.currentUser);
      });
  }
  logoutUser() {
    console.log(this);
    this.afAuth.auth.signOut().then(() =>  { this.user = null; console.log(this.afAuth.auth.currentUser); }  );
  }
}
