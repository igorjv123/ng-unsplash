import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardsComponent } from './components/cards/cards.component';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './components/card/card.component';
import { RouterModule, Routes } from '@angular/router';
import { PhotoPageComponent } from './pages/photo-page/photo-page.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import {FormsModule} from '@angular/forms';

const appRoutes: Routes = [
  {
    path: '',
    component: CardsComponent
  },
  {
    path: 'photo/:id',
    component: PhotoPageComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    CardComponent,
    PhotoPageComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true } // <-- debugging purposes only
    ),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
