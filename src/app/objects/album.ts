import { Artist } from './artist';

class Image {
  height: number;
  url: string;
  width: number;
}

export class Album {
  album_type: string;
  artists: Artist[];
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  images: Image[];
  name: string;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
  type: string;
  uri: string;
}
