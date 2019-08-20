import { Component, OnInit } from '@angular/core';
import {PhotosService} from '../shared/cards.service';
import {delay} from 'rxjs/operators';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.sass']
})
export class CardsComponent implements OnInit {

  private loading = true;

  constructor(private photosService: PhotosService) { }

  ngOnInit() {
    this.photosService.fetchPhotos()
      .subscribe(() => {
        console.log(this.photosService.photos);
      });
  }
}
