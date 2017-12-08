import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

interface tokaprojekti { //tietotyyppi
  t_nimi : string,
  t_aika : number
}

@IonicPage()
@Component({
  selector: 'page-toka',
  templateUrl: 'toka.html',
})
export class TokaPage {

  maxTunnit : number = 0;
  toka_proju : tokaprojekti;
  toka_lista : tokaprojekti[] = 
  [
    {
      t_nimi : "A",
      t_aika : 10
    },
    {
      t_nimi : "B",
      t_aika : 5
    },
    {
      t_nimi : "C",
      t_aika : 20
    },
    {
      t_nimi : "D",
      t_aika : 12
    },
    {
      t_nimi : "E",
      t_aika : 24
    },
    {
      t_nimi : "F",
      t_aika : 1
    },
    {
      t_nimi : "G",
      t_aika : 6
    },
    {
      t_nimi : "H",
      t_aika : 3
    },
    {
      t_nimi : "I",
      t_aika : 8
    },
    {
      t_nimi : "J",
      t_aika : 15
    }
  ];
  toka_paras : any;
  reppu : tokaprojekti[];
  varalista : tokaprojekti[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  laskeReppu = () : void => {
    this.reppu = [];
    this.varalista = this.toka_lista.map(x=>Object.assign({}, x));
    for(let i : number = 0;i<this.maxTunnit;){
      this.toka_paras = this.varalista.reduce( //pidetään pienempi arvo, poistetaan isompi
        (edellinen, nykyinen) : tokaprojekti =>{
          return (edellinen.t_aika < nykyinen.t_aika) ? edellinen : nykyinen;
        });
      if((i + this.toka_paras.t_aika <= this.maxTunnit)){
        this.reppu.push(this.toka_paras);
        i = i + this.toka_paras.t_aika;
      }
      else{
        break;
      }
      //poistetaan varalistasta.
      for(let j = 0;j<this.varalista.length;j++){
        if(this.toka_paras.t_nimi == this.varalista[j].t_nimi){
          this.varalista.splice(j,1);
        }
      }
    }
    console.log("Päälista: " + this.toka_lista)
    console.log("Varalista: " + this.varalista)
  }
  

}
