import {Component, OnInit} from '@angular/core';
import {PhotosService} from '../../core/services/cards.service';
import {AuthService} from '../../core/services/auth.service';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.sass']
})
export class SearchBarComponent implements OnInit {
  public query = '';
  constructor(private photoService: PhotosService, private authService: AuthService) {
  }

  ngOnInit() {
    console.log();
  }

  searchClick() {
    this.photoService.fetchPhotos(this.query, 1).subscribe();
  }

  authClick() {
    this.authService.authUser();

  }
  logOutClick() {
    console.log('logout')
    this.authService.logoutUser();
  }
}
