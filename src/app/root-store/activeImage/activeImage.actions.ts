import {Action} from '@ngrx/store';
import {Character} from '../../models/character/character.model';
import {Photo} from '../../core/interfaces/photo';

export const GET_CHARACTER          = '[Character] Get';
export const GET_DEFAULT_CHARACTER  = '[Character] Get Default';
export const ADD_CHARACTER          = '[Character] Add';
export const SET_CHARACTER          = '[Character] Set';
export const DELETE_CHARACTER       = '[Character] Delete';

export class SetActiveImage implements Action {
  readonly type = SET_CHARACTER;

  constructor(public character: Photo) {
  }
}

export type All = SetCharacter;
