import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Album } from '../store/albums/albums.models';
import { AlbumsState } from '../store/albums/albums.state';
import { LoadAlbums } from '../store/albums/albums.actions';
import { LoadPhotosByAlbum } from '../store/photos/photos.actions';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html'
})
export class AlbumsComponent implements OnInit {
  albums$: Observable<Album[]>;

  constructor(private store: Store) {
    this.albums$ = this.store.select(AlbumsState.albums);
  }

  ngOnInit(): void {
    this.store.dispatch(new LoadAlbums());
  }

  selectAlbum(albumId: number): void {
    this.store.dispatch(new LoadPhotosByAlbum(albumId));
  }

  reloadData(): void {
    this.store.dispatch(new LoadAlbums());
  }
}
