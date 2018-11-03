import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { KlemovPage } from '../pages/klemov/klemov';
import { ProcesosPage } from '../pages/procesos/procesos';
import { DesarrolladoresPage } from '../pages/desarrolladores/desarrolladores';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { ProgramatePage } from '../pages/programate/programate';
import { EsperandoBusPage } from '../pages/esperando-bus/esperando-bus';
import { GuiasDeRutasPage } from '../pages/guias-de-rutas/guias-de-rutas';
import { ApiATransmilenioPage } from '../pages/api-atransmilenio/api-atransmilenio';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    KlemovPage,
    ProcesosPage,
    DesarrolladoresPage,
    TabsControllerPage,
    ProgramatePage,
    EsperandoBusPage,
    GuiasDeRutasPage,
    ApiATransmilenioPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    KlemovPage,
    ProcesosPage,
    DesarrolladoresPage,
    TabsControllerPage,
    ProgramatePage,
    EsperandoBusPage,
    GuiasDeRutasPage,
    ApiATransmilenioPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}