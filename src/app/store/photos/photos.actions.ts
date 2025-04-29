import { Photo } from "./photos.models";

// src/app/store/photos/photos.actions.ts
export class LoadPhotos {
  static readonly type = '[Photos API] Load Photos';
}
export class AddPhoto {
  static readonly type = '[Photos Page] Add Photo';
  constructor(public payload: Photo) {}
}
export class DeletePhoto {
  static readonly type = '[Photos Page] Delete Photo';
  constructor(public payload: number) {}  // photo ID
}
export class LoadPhotosByAlbum {
  static readonly type = '[Photos] Load by Album';
  constructor(public albumId: number) {}
}
