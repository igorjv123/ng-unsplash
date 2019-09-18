import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {delay, tap} from 'rxjs/operators';
import {ACCESS_KEY} from './api.config';

@Injectable({
  providedIn: 'root'
})
export class CollectionsService {
  public collections = null;
  public collectionPhotos = [];
  private id  = null;
  private page = 1;
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

  constructor() { }


  getCollectionsList(page = 1, per_page = 10) {
    return this.HttpReq(`https://api.unsplash.com/collections/featured?page=${page}&per_page=${per_page}&client_id=${ACCESS_KEY}`)
      .pipe(tap(collections => { this.collections = collections; console.log(collections); }));
  }
  getCollectionPhotos(id, page) {
    this.id = id
    return this.HttpReq(`https://api.unsplash.com/collections/${id}/photos?page=${page}&per_page=10&client_id=${ACCESS_KEY}`)
      .pipe(tap(photos => { this.collectionPhotos = photos; this.page++ }));
  }
  loadMoreCollectionsPhoto(page) {
    return this.HttpReq(`https://api.unsplash.com/collections/${this.id}/photos?page=${page}&per_page=10&client_id=${ACCESS_KEY}`)
      .pipe(tap(photos => { this.collectionPhotos = [...this.collectionPhotos, ...photos]; console.log(photos); }));
  }




}

// validation to utils
// ngrx service
// api firebase to environment
