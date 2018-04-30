import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WbsProvider } from '../../providers/wbs/wbs';
import { EquipoEstadistica } from '../../models/EquipoEstadistica';

@Component({
  selector: 'page-estadisticas',
  templateUrl: 'estadisticas.html',
})
export class EstadisticasPage {

  equiposE:EquipoEstadistica[]=[];
  constructor(public navCtrl: NavController,public navParams: NavParams,public _wbsProvider:WbsProvider){
    this.cargarEstadisticasGenerales();
  }
  cargarEstadisticasGenerales(){
    this._wbsProvider.getEstadisticasGenerales().subscribe(
      data=>{
        this.equiposE=this.equiposE.concat(data);
        console.log(this.equiposE);
      },
      error=>{
        console.log(error);
      }
    );

  }

}
