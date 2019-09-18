import {Component, Input, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Photo} from '../../core/interfaces/photo';
import * as ActiveImageActions from '../../store/activeImage/activeImage.actions';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent implements OnInit {
  @Input() photo;
  constructor(private store: Store<Photo>
  ) {

  }
  ngOnInit() {  }

  photoClick(photo) {
    console.log(photo)
    this.store.dispatch(new ActiveImageActions.SetActiveImage(photo));
  }
}
