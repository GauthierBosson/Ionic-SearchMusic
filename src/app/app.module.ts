import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ArtistesPage } from "../pages/artistes/artistes";
import { AlbumsPage } from "../pages/albums/albums";
import { MusiquesPage } from "../pages/musiques/musiques";
import { DetailsPage } from "../pages/details/details";
import { MusicServiceProvider } from '../providers/music-service/music-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ArtistesPage,
    AlbumsPage,
    MusiquesPage,
    DetailsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ArtistesPage,
    AlbumsPage,
    MusiquesPage,
    DetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MusicServiceProvider
  ]
})
export class AppModule {}
