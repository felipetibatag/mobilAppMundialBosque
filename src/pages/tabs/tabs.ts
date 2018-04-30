import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {EstadisticasPage} from '../estadisticas/estadisticas'
import {GanadoresPage} from '../ganadores/ganadores'
import {ClasificadosPage} from '../clasificados/clasificados'


@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  clasificados = ClasificadosPage;
  ganadores = GanadoresPage;
  estadisticas = EstadisticasPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
