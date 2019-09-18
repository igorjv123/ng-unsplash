import {Photo} from './photo';

export interface Photos {
  results: Photo[];
  total: number;
  total_pages: number;
}
