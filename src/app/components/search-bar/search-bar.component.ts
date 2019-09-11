import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../../core/services/cards.service';
import { AuthService } from '../../core/services/auth.service';
import {AngularFireAuth} from '@angular/fire/auth';
import { auth } from 'firebase/app';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.sass']
})
export class SearchBarComponent implements OnInit {
  public user: any = {};
  public query = '';

  constructor(public afAuth: AngularFireAuth, private photoService: PhotosService, private authService: AuthService) { }

  ngOnInit() {

  }

  searchClick() {
    this.photoService.fetchPhotos(this.query, 1).subscribe();
  }
  authClick() {
    // this.afAuth.auth.createUserWithEmailAndPassword(123, 123).then(user => console.log(user));
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider()).then(user => {console.log(this.afAuth.auth.currentUser); this.user = user; } );
  }
}
