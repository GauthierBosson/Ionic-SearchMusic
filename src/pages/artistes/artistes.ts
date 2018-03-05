import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DetailsPage } from '../details/details'

/**
 * Generated class for the ArtistesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-artistes',
  templateUrl: 'artistes.html',
})
export class ArtistesPage {


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ArtistesPage');
  }

  push() {
    this.navCtrl.push(DetailsPage);
  }

}
