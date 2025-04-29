import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AlbumsComponent } from './albums/albums.component';
import { PhotosComponent } from './photos/photos.component';
import { NgxsModule } from '@ngxs/store';
import { NgxsResetPluginModule } from 'ngxs-reset-plugin';
import { AlbumsState } from './store/albums/albums.state';
import { PhotosState } from './store/photos/photos.state';

@NgModule({
  declarations: [
    AppComponent,
    AlbumsComponent,
    PhotosComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // Import HttpClientModule to make HTTP requests
    NgxsModule.forRoot([AlbumsState,PhotosState]), // Initialize NGXS store with an empty state
    NgxsResetPluginModule.forRoot() ,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
