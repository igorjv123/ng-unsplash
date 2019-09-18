export interface Photo {
  alt_description: string;
  categories: Array<any>;
  length: number;
  color: string;
  created_at: string;
  current_user_collections: Array<any>;
  description: string;
  height: number;
  id: string;
  liked_by_user: false;
  likes: 71;
  links: {
    self: string;
    html: string;
    download: string,
    download_location: string;
  };
  tags: Array<any>;
  updated_at: string;
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  };
  user: {
    id: string,
    updated_at: string,
    username: string,
    name: string,
    first_name: string
  };
  width: number;
}
