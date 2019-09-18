import {Component, OnDestroy, OnInit} from '@angular/core';
import {PhotosService} from '../../core/services/cards.service';
import {CollectionsService} from '../../core/services/collections.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.sass']
})
export class CategoryPageComponent implements OnInit, OnDestroy {

  private loading = true;
  private page = 1;

  constructor(  private route: ActivatedRoute,
                private router: Router,
                private photosService: PhotosService,
                private location: Location,
                private collectionsService: CollectionsService) { }
  logPhotos<T>(photos: T) {
    console.log(photos);
  }

  ngOnInit() {
    window.addEventListener('scroll', this.handleScroll, false);
    // @ts-ignore
    const { id } = this.route.params.value;
    console.log(id)
    this.collectionsService.getCollectionPhotos(id, 1)
      .subscribe(this.logPhotos);
  }

  handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight) {
      this.page++;
      console.log(this.page)
      this.collectionsService.loadMoreCollectionsPhoto(this.page).subscribe();
    }
    // setTimeout(null, 500);

  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.handleScroll, false );
  }

}
