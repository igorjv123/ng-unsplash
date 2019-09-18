import * as ActiveImageAction from './activeImage.actions';
import {initialState} from './initialState';
import {Photo} from '../../core/interfaces/photo';

export type Action = ActiveImageAction.All;


export function activeImageReducer(state: Photo = initialState, action: Action) {
  console.log('[activeImageReducer]', action.type, state);
  switch (action.type) {
    case ActiveImageAction.SET_ACTIVE_IMAGE:
      return {...action.photo};
    default:
      return state;
  }
}
