import {Photo} from '../../core/interfaces/photo';

export const initialState: Photo = {
  alt_description: '',
  categories: [],
  length: 0,
  color: '',
  created_at: '',
  current_user_collections: [],
  description: '',
  height: 0,
  id: '',
  liked_by_user: false,
  likes: 71,
  links: {
    self: '',
    html: '',
    download: '',
      download_location: '',
  },
  tags: [],
  updated_at: '',
  urls: {
    raw: '',
    full: '',
    regular: '',
    small: '',
    thumb: '',
  },
  user: {
    id: '',
      updated_at: '',
      username: '',
      name: '',
      first_name: ''
  },
  width: 0,
};
