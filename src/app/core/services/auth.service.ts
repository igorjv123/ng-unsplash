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
    // console.log(typeof authenticationUrl)
    // fetch(authenticationUrl, {
    //   method: 'GET',
    //   mode: 'cors',
    //   headers: {
    //     'Access-Control-Allow-Origin': '*'
    //   },
    //   // body: JSON.stringify({
    //   //   client_id: ACCESS_KEY,
    //   //   redirect_uri: location.origin + location.pathname,
    //   //   response_type: 'code',
    //   //   scope: 'public',
    //   // }),
    //   redirect: 'follow'
    //
    // }).then(res => console.log(res.json()));
    // // location.assign('https://unsplash.com/oauth/authorize');
    location.assign(authenticationUrl);
    // unsplash.auth.userAuthentication('74dc3b2a7c50629665ffc5feed40accd51d476da1887a353e8e05433c9b93c44')
    //   .then(json => json.json())
    //   .then(json => {
    //     console.log(json);
    //   });

  }
}
