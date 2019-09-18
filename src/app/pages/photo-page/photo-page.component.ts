import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PhotosService} from '../../core/services/cards.service';
import {Location} from '@angular/common';


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
    private location: Location
  ) { }

  ngOnInit() {
    const { id } = this.route.params.value;
    this.photosService.getPhotoById(id).subscribe((photo) => console.log(photo));
    console.log();
  }
  backClicked() {
    this.location.back();
  }

}
