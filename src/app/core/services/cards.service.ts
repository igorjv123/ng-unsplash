import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import {ACCESS_KEY} from './api.config';
import {Photo} from '../interfaces/photo';
import {Photos} from '../interfaces/photos';

@Injectable({ providedIn: 'root' })

export class PhotosService {
  public photos: Photos;
  public photo: Photo;
  private query = 'popular';
  constructor() {}

  HttpReq(url) {
    return Observable.create(observer => {

      const controller = new AbortController();
      const signal = controller.signal;

      fetch(url, {signal})
        .then(response => {
          if (response.ok) {
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

  fetchPhotos(query: string = 'popular', page: number = 1): Observable<Photo[]> {
    this.query = query;
    return this.HttpReq(`https://api.unsplash.com/search/photos?query=${this.query}&page=${page}&client_id=${ACCESS_KEY}`)
      .pipe(tap(photos => { this.photos = {...photos}; }));
  }
  fetchMorePhotos(page: number = 1): Observable<Photo[]> {
    return this.HttpReq(`https://api.unsplash.com/search/photos?query=${this.query}&page=${page}&client_id=${ACCESS_KEY}`)
      .pipe(tap(photos => { console.log(photos); this.photos.results = [...this.photos.results, ...photos.results]; }));
  }
  getPhotoById(id) {
    this.photo = null;
    return this.HttpReq(`https://api.unsplash.com/photos/${id}?client_id=${ACCESS_KEY}`)
      .pipe(tap(photo => { this.photo = photo; }));
  }
}
