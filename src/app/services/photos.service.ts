import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Photo } from '../store/photos/photos.models';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PhotosService {
  private url = 'https://jsonplaceholder.typicode.com/photos';

  constructor(private http: HttpClient) {}

  getPhotosByAlbum(albumId: number): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${this.url}?albumId=${albumId}`);
  }
}
