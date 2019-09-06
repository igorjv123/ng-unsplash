import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../../core/services/cards.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.sass']
})
export class SearchBarComponent implements OnInit {

  public query = '';

  constructor(private photoService: PhotosService) { }

  ngOnInit() {

  }

  searchClick() {
    this.photoService.fetchPhotos(this.query, 1).subscribe();
  }
}
