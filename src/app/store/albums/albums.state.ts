// src/app/store/albums/albums.state.ts
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { Album } from './albums.models';
import { LoadAlbums, AddAlbum, DeleteAlbum } from './albums.actions';
import { AlbumsService } from '../../services/albums.service';

export interface AlbumsStateModel {
  albums: Album[];
}

@State<AlbumsStateModel>({
  name: 'albums',
  defaults: {
    albums: [],
  },
})
@Injectable()
export class AlbumsState {

    constructor(private albumsService: AlbumsService) {}
  // Selector to get the list of albums
  @Selector()
  static albums(state: AlbumsStateModel) {
    return state.albums;
  }

  // Handle LoadAlbums: (e.g., fetch from API)
  @Action(LoadAlbums)
  loadAlbums(ctx: StateContext<AlbumsStateModel>) {
    // In a real app, inject a service to fetch data.
  
    // Here we just initialize to empty or dummy data.
      return this.albumsService.getAlbums().subscribe(albums => {
      ctx.patchState({ albums });
    });
  }

  // Handle AddAlbum: add new album to state
  @Action(AddAlbum)
  addAlbum(ctx: StateContext<AlbumsStateModel>, action: AddAlbum) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      albums: [...state.albums, action.payload],
    });
  }

  // Handle DeleteAlbum: remove album by ID
  @Action(DeleteAlbum)
  deleteAlbum(ctx: StateContext<AlbumsStateModel>, action: DeleteAlbum) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      albums: state.albums.filter((album) => album.id !== action.payload),
    });
  }


}
