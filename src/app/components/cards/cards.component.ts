import {Component, OnDestroy, OnInit} from '@angular/core';
import {PhotosService} from '../../core/services/cards.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.sass'],
})
export class CardsComponent implements OnInit, OnDestroy {

  private loading = true;
  private page = 1;

  constructor(private photosService: PhotosService) { }
  logPhotos<T>(photos: T) {
    console.log(photos);
  }

  ngOnInit() {
    window.addEventListener('scroll', this.handleScroll, false);

    this.photosService.fetchPhotos()
      .subscribe(this.logPhotos);
  }

  handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight) {
      this.page++;
      this.photosService.fetchMorePhotos(this.page).subscribe();
    }
    // setTimeout(null, 500);

  }
  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.handleScroll, false);
  }
}
