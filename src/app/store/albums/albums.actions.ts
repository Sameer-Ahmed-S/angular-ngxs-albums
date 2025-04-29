import { Album } from "./albums.models";

export class LoadAlbums {
  static readonly type = '[Albums API] Load Albums';
}
export class AddAlbum {
  static readonly type = '[Albums Page] Add Album';
  constructor(public payload: Album) {}
}
export class DeleteAlbum {
  static readonly type = '[Albums Page] Delete Album';
  constructor(public payload: number) {}  // album ID to delete
}