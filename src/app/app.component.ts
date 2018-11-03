import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ProgramatePage } from '../pages/programate/programate';
import { GuiasDeRutasPage } from '../pages/guias-de-rutas/guias-de-rutas';
import { EsperandoBusPage } from '../pages/esperando-bus/esperando-bus';
import { ApiATransmilenioPage } from '../pages/api-atransmilenio/api-atransmilenio';


import { KlemovPage } from '../pages/klemov/klemov';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = KlemovPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  goToProgramate(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ProgramatePage);
  }goToGuiasDeRutas(params){
    if (!params) params = {};
    this.navCtrl.setRoot(GuiasDeRutasPage);
  }goToEsperandoBus(params){
    if (!params) params = {};
    this.navCtrl.setRoot(EsperandoBusPage);
  }goToApiATransmilenio(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ApiATransmilenioPage);
  }
}
