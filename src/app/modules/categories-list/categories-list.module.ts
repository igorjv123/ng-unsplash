import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesListComponent } from './categories-list.component';
import {CategoryPageComponent} from '../../pages/category-page/category-page.component';
import {AppModule} from '../../app.module';

const routes: Routes = [
  { path: '', component: CategoriesListComponent},
  { path: 'photos/:id', component: CategoryPageComponent}
];


@NgModule({
  declarations: [CategoriesListComponent, CategoryPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class CategoriesListModule { }
