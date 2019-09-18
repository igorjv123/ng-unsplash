import {Action} from '@ngrx/store';
import {Photo} from '../../core/interfaces/photo';

export const SET_ACTIVE_IMAGE          = '[Active image] Set';

export class SetActiveImage implements Action {
  readonly type = SET_ACTIVE_IMAGE;
  constructor(public photo: Photo) {
  }
}

export type All = SetActiveImage;
