import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProgramatePage } from '../programate/programate';
import { EsperandoBusPage } from '../esperando-bus/esperando-bus';

@Component({
  selector: 'page-klemov',
  templateUrl: 'klemov.html'
})
export class KlemovPage {

  constructor(public navCtrl: NavController) {
  }
  goToProgramate(params){
    if (!params) params = {};
    this.navCtrl.push(ProgramatePage);
  }goToEsperandoBus(params){
    if (!params) params = {};
    this.navCtrl.push(EsperandoBusPage);
  }
}
