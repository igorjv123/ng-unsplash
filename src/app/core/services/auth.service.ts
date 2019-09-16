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
  public authWarning = null;

  constructor(public afAuth: AngularFireAuth) { }

  authUserWithGoogle() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
      .then(user => {
        this.user = user.user;
        console.log(this.user);
        console.log(this.afAuth.auth.user);
      });
  }
  authUserWithCred(login, pass, closePopup) {
    this.authWarning = null;
    return this.afAuth.auth.signInWithEmailAndPassword(login, pass).then(closePopup()).catch(err => {this.authWarning = err.message;});
  }
  createNewUser(login, pass) {
    this.authWarning = null;
    return this.afAuth.auth.createUserWithEmailAndPassword(login, pass).catch(err => {this.authWarning = err.message; } );
  }
  logoutUser() {
    console.log(this);
    this.afAuth.auth.signOut().then(() =>  { this.user = null; console.log(this.afAuth.auth.user); }  );
  }
}
