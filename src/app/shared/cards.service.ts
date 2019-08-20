import {Injectable} from '@angular/core';
import {HttpClient } from '@angular/common/http';
import {Observable } from 'rxjs';
import {tap} from 'rxjs/operators';

export const ACCESS_KEY = 'fc6a80d90e77dc9c5176a86a7d2f1b0fca4616fb13c7a316369ca51f6abf9254';


export interface Photo {
  page: number;
  results: object;
  per_page: number;
}

@Injectable({providedIn: 'root'})
export class PhotosService {
  public photos: Photo[] = [];

  constructor(private http: HttpClient) {
  }

  fetchPhotos(): Observable<Photo[]> {
    return this.http.get<Photo[]>(`https://api.unsplash.com/search/photos?query=car&client_id=${ACCESS_KEY}`)
      .pipe(tap(photos => this.photos = photos ));
  }
}
