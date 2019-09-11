import { Injectable } from '@angular/core';
import Unsplash from 'unsplash-js';
import {ACCESS_KEY, SECRET_KEY} from './api.config';

const unsplash = new Unsplash({
  applicationId: ACCESS_KEY,
  secret: SECRET_KEY
});

const authenticationUrl = unsplash.auth.getAuthenticationUrl([
  'public',

]);


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  authUser() {
    // // console.log(typeof authenticationUrl)
    // fetch(authenticationUrl, {
    //   method: 'POST',
    //   mode: 'cors',
    //   headers: {
    //     'Access-Control-Allow-Origin': '*'
    //   },
    //   body: JSON.stringify({
    //     client_id: ACCESS_KEY,
    //     redirect_uri: location.origin + location.pathname,
    //     response_type: 'code',
    //     scope: 'public',
    //   }),
    //   redirect: 'follow'
    //
    // }).then(res => console.log(res.json()));
    // tslint:disable-next-line:max-line-length
    location.assign(`https://unsplash.com/oauth/authorize?client_id=${ACCESS_KEY}&redirect_uri=https://localhost:4200&response_type=code&scope=public`);
  }
}
