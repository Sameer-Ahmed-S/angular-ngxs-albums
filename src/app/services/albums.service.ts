import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Album } from '../store/albums/albums.models';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AlbumsService {
  private url = 'https://jsonplaceholder.typicode.com/albums';

  constructor(private http: HttpClient) {}

  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(this.url);
  }
}
