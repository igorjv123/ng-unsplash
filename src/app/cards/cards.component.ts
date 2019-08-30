import { Component, OnInit } from '@angular/core';
import {PhotosService} from '../core/cards.service';
import {delay} from 'rxjs/operators';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.sass']
})
export class CardsComponent implements OnInit {

  private loading = true;

  constructor(private photosService: PhotosService) { }

  logPhotos<T>(photos: T) {
    console.log(photos);
  }

  ngOnInit() {
    this.photosService.fetchPhotos()
      .subscribe(this.logPhotos);
  }
}
