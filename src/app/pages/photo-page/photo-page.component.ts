import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PhotosService} from '../../core/services/cards.service';
import {Location} from '@angular/common';
import {Store} from '@ngrx/store';
import {StoreModel} from "../../store/store.model";


@Component({
  selector: 'app-photo-page',
  templateUrl: './photo-page.component.html',
  styleUrls: ['./photo-page.component.sass']
})
export class PhotoPageComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private photosService: PhotosService,
    private location: Location,
    private store: Store<StoreModel>
  ) { }

  ngOnInit() {
    this.store.subscribe(store => {
      this.photosService.photo = store.activeImage;
    })
    if (this.photosService.photo.alt_description === '') {
      // @ts-ignore
      const {id} = this.route.params.value;
      this.photosService.getPhotoById(id).subscribe((photo) => console.log(photo));
    }
  }
  backClicked() {
    this.location.back();
  }

}
