import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

interface ekaprojekti { //tietotyyppi
  e_nimi : string,
  e_aika : number
}

@IonicPage()
@Component({
  selector: 'page-eka',
  templateUrl: 'eka.html',
})
export class EkaPage {

  eka_proju : ekaprojekti; //olio
  eka_lista : ekaprojekti[] = //taulukko olioista
  [
    {
      e_nimi : "A",
      e_aika : 12
    },
    {
      e_nimi : "B",
      e_aika : 6
    },
    {
      e_nimi : "C",
      e_aika : 10
    }
  ];

  eka_paras : any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.eka_paras = this.eka_lista.reduce( //pidetään pienempi arvo, poistetaan isompi
      (edellinen, nykyinen) : ekaprojekti =>{
        return (edellinen.e_aika < nykyinen.e_aika) ? edellinen : nykyinen;
      });
  }

}
