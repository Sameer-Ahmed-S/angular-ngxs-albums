// src/app/store/photos/photos.state.ts
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { Photo } from './photos.models';
import { LoadPhotos, AddPhoto, DeletePhoto, LoadPhotosByAlbum } from './photos.actions';
import { PhotosService } from '../../services/photos.service';

export interface PhotosStateModel {
  photos: Photo[];
}

@State<PhotosStateModel>({
  name: 'photos',
  defaults: {
    photos: []
  }
})
@Injectable()
export class PhotosState {
  /**
   *
   */
  constructor(private photosService:PhotosService) {
    
  }
  @Selector()
  static photos(state: PhotosStateModel) {
    return state.photos;
  }


  @Action(AddPhoto)
  addPhoto(ctx: StateContext<PhotosStateModel>, action: AddPhoto) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      photos: [...state.photos, action.payload]
    });
  }

  @Action(DeletePhoto)
  deletePhoto(ctx: StateContext<PhotosStateModel>, action: DeletePhoto) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      photos: state.photos.filter(photo => photo.id !== action.payload)
    });
  }


  @Action(LoadPhotosByAlbum)
  loadPhotos(ctx: StateContext<PhotosStateModel>, action: LoadPhotosByAlbum) {
    return this.photosService.getPhotosByAlbum(action.albumId).subscribe(photos => {
      ctx.patchState({ photos });
    });
  }
}
