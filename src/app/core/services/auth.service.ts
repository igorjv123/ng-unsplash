import { Injectable } from '@angular/core';
import Unsplash from 'unsplash-js';
import {ACCESS_KEY, SECRET_KEY} from './api.config';
import {AngularFireAuth} from '@angular/fire/auth';
import {auth} from 'firebase';

const unsplash = new Unsplash({
  applicationId: ACCESS_KEY,
  secret: SECRET_KEY
});

const authenticationUrl = unsplash.auth.getAuthenticationUrl([
  'public',

]);

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user;
  constructor(private afAuth: AngularFireAuth, ) { }

  authUser() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
      .then(user => {
        console.log(this.afAuth.auth.currentUser);
        this.user = user;
      });
  }
}
