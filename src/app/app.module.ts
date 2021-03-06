import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CardsComponent} from './components/cards/cards.component';
import {HttpClientModule} from '@angular/common/http';
import {CardComponent} from './components/card/card.component';
import {RouterModule, Routes} from '@angular/router';
import {PhotoPageComponent} from './pages/photo-page/photo-page.component';
import {SearchBarComponent} from './components/search-bar/search-bar.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {environment} from '../environments/environment';
import {PopUpComponent} from './components/pop-up/pop-up.component';
import {SignFormComponent} from './components/sign-form/sign-form.component';

import {StoreModule} from '@ngrx/store';
import {activeImageReducer} from './store/activeImage/activeImage.reducer';
import { SortPipe } from './core/pipes/sort.pipe';

const appRoutes: Routes = [
  {
    path: '',
    component: CardsComponent
  },
  {
    path: 'photo/:id',
    component: PhotoPageComponent
  },
  {
    path: 'categories-list',
    loadChildren: () => import('./modules/categories-list/categories-list.module')
      .then(m => m.CategoriesListModule)
  }
];

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    CardComponent,
    PhotoPageComponent,
    SearchBarComponent,
    PopUpComponent,
    SignFormComponent,
    SortPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true } // <-- debugging purposes only
    ),
    StoreModule.forRoot({
      activeImage: activeImageReducer
    }),
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
  ],
  providers: [],
  exports: [
    CardComponent,
    CardComponent
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
