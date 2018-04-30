import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

//Paginas
import { MyApp } from './app.component';
import {ClasificadosPage} from '../pages/clasificados/clasificados';
import {EstadisticasPage} from '../pages/estadisticas/estadisticas';
import {GanadoresPage} from '../pages/ganadores/ganadores';
import {TabsPage} from '../pages/tabs/tabs';
import { WbsProvider } from '../providers/wbs/wbs';

import {HttpClientModule} from "@angular/common/http";
import {HttpModule} from "@angular/http";
//Pipes
import {ImagenPipe} from '../pipes/imagen/imagen';
import { HistoricoEquipoPage } from '../pages/historico-equipo/historico-equipo';

@NgModule({
  declarations: [
    MyApp,
    ClasificadosPage,
    EstadisticasPage,
    GanadoresPage,
    TabsPage,
    ImagenPipe,
    HistoricoEquipoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ClasificadosPage,
    EstadisticasPage,
    GanadoresPage,
    TabsPage,
    HistoricoEquipoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    WbsProvider
  ]
})
export class AppModule {}
