import { Component, ViewChild } from '@angular/core';
import { Store } from '@ngxs/store';
import { StateClear } from 'ngxs-reset-plugin';
import { AlbumsComponent } from './albums/albums.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'angular-ngxs-albums';
  constructor(private store: Store) {}
  
  @ViewChild(AlbumsComponent) albumsComponent!: AlbumsComponent;


  loadData() {
    // Logic to load data from the store or API
    // reload album and photos component
    this.albumsComponent.reloadData();
  }
  
  clearStore()
   {

    this.store.dispatch(new StateClear());
  }
}