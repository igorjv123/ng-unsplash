import { Component, OnInit } from '@angular/core';
import {CollectionsService} from '../../core/services/collections.service';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.sass']
})
export class CategoriesListComponent implements OnInit {
  private page = 1;
  constructor(private collectionService: CollectionsService) { }

  ngOnInit() {
    this.collectionService.getCollectionsList().subscribe();
  }
}
