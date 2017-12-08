import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EkaPage } from '../eka/eka';
import { TokaPage } from '../toka/toka';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }

  naytaEka = () : void => {
    this.navCtrl.push(EkaPage);
  }
  naytaToka = () : void => {
    this.navCtrl.push(TokaPage);
  }

}
