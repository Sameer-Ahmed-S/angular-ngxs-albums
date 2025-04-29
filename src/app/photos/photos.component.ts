import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Photo } from '../store/photos/photos.models';
import { PhotosState } from '../store/photos/photos.state';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent {
  photos$: Observable<Photo[]>;

  constructor(private store: Store) {
    this.photos$ = this.store.select(PhotosState.photos);
  }


  
}
