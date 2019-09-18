import {Component, OnInit} from '@angular/core';
import {PhotosService} from '../../core/services/cards.service';
import {AuthService} from '../../core/services/auth.service';
import { FormBuilder } from '@angular/forms';
import {Router} from '@angular/router';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.sass']
})
export class SearchBarComponent implements OnInit {
  public query = '';
  public showPopUp = false;
  public loginForm;

  constructor( private router: Router, private photoService: PhotosService, private authService: AuthService, ) {

  }

  ngOnInit() {
  }

  searchClick() {
    if (this.query !== '') {
      this.photoService.fetchPhotos(this.query, 1).subscribe();
    }
    this.router.navigate(['']);
  }

  authClick() {
    this.authService.authUserWithGoogle();
  }
  logOutClick() {
    console.log('logout');
    this.authService.logoutUser();
  }
  showPopup() {
    this.showPopUp = true;
  }
  closePopup() {
    this.showPopUp = false;
  }
}
