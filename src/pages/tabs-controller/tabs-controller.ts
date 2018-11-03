import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { KlemovPage } from '../klemov/klemov';
import { ProcesosPage } from '../procesos/procesos';
import { DesarrolladoresPage } from '../desarrolladores/desarrolladores';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {

  tab1Root: any = KlemovPage;
  tab2Root: any = ProcesosPage;
  tab3Root: any = DesarrolladoresPage;
  constructor(public navCtrl: NavController) {
  }
  
}
