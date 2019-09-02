import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './card/card.component';
import { RouterModule, Routes } from '@angular/router';
import { PhotoPageComponent } from './pages/photo-page/photo-page.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

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
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
