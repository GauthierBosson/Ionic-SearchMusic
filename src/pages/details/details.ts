import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
    Artistes: any;
    artiste;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

      this.Artistes = [
          {id: 1, name: 'Daft Punk', pic: '../assets/imgs/daft-punk-around-the-world-200x200.jpg'},
          {id: 2, name: 'Carpenter Brut', pic: '../assets/imgs/a1101171123_2.jpg'},
          {id: 3, name: 'The Toxic Avenger', pic: '../assets/imgs/toxicavenger.jpg'},
          {id: 4, name: 'Justice', pic: '../assets/imgs/justice.jpg'},
          {id: 5, name: 'Woodkid', pic: '../assets/imgs/woodkid.jpg'}
      ];
      let id = this.navParams['id'];
      for (let i = 0 ; i < this.Artistes.length ; i++) {
          if (this.Artistes[i].id == id ) {
              this.artiste = this.Artistes[i];
          }
      }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }

}
