import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export const ACCESS_KEY = 'fc6a80d90e77dc9c5176a86a7d2f1b0fca4616fb13c7a316369ca51f6abf9254';

export interface Photo {
  page: number;
  results: object;
  per_page: number;
}

@Injectable({ providedIn: 'root' })

export class PhotosService {
  public photos = {};
  public photo = {};
  constructor() {}

  HttpReq(url) {
    return Observable.create(observer => {

      const controller = new AbortController();
      const signal = controller.signal;

      fetch(url, {signal})
        .then(response => {
          if (response.ok) {
            console.log(url)
            return response.json();
          } else {
            observer.error(`Failed HTTP : response.status`);
          }
        })
        .then(photos => {
          observer.next(photos);
          observer.complete();
        })
        .catch(err => {
          observer.error(err);
        });

      return () => controller.abort();
    });
  }

  fetchPhotos(): Observable<Photo[]> {
    console.log('service');
    return this.HttpReq(`https://api.unsplash.com/search/photos?query=car&client_id=${ACCESS_KEY}`)
      .pipe(tap(photos => { this.photos = photos; }));
  }
  getPhotoById(id) {
    this.photo = {};
    return this.HttpReq(`https://api.unsplash.com/photos/${id}?client_id=${ACCESS_KEY}`)
      .pipe(tap(photo => { console.log(photo); this.photo = photo; }));
  }
}
