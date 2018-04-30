import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { WbsProvider } from '../../providers/wbs/wbs';
import { EquipoEstadistica } from '../../models/EquipoEstadistica';
import { HistoricoEquipo } from '../../models/HistoricoEquipo';


@Component({
  selector: 'page-historico-equipo',
  templateUrl: 'historico-equipo.html',
})
export class HistoricoEquipoPage {

  equipo:EquipoEstadistica;
  equipos:HistoricoEquipo[]=[];
  cod_pais:string;
  pais:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public _wbsProvider:WbsProvider) {
    this.cargarHistoricoEquipo();
    this.cod_pais=this.navParams.get('equipo').cod_pais;
    this.pais=this.navParams.get('equipo').nombre;
  }

  cargarHistoricoEquipo(){
    console.log("Equipo a enviar " + this.navParams.get('equipo'));
    this._wbsProvider.getHistorialEquipo(this.navParams.get('equipo')).subscribe(
      data=>{
        this.equipos=this.equipos.concat(data);
      },
      error=>{
        console.log(error);
      }
    );
  }



}
