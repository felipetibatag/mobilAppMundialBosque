import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WbsProvider } from '../../providers/wbs/wbs';
import { EquipoEstadistica } from '../../models/EquipoEstadistica';
import { HistoricoEquipoPage } from '../historico-equipo/historico-equipo';

@Component({
  selector: 'page-estadisticas',
  templateUrl: 'estadisticas.html',
})
export class EstadisticasPage {


  public fallo:boolean;
  public msgFallo:string;

  equiposE:EquipoEstadistica[]=[];
  constructor(public navCtrl: NavController,public navParams: NavParams,public _wbsProvider:WbsProvider){
  }

  ionViewDidLoad(){
    this.cargarEstadisticasGenerales();
  }


  cargarEstadisticasGenerales(){
    this._wbsProvider.getEstadisticasGenerales().subscribe(
      data=>{
        this.equiposE=this.equiposE.concat(data);
        this.fallo=false;
      },
      error=>{
        this.fallo=true;
        this.msgFallo=error.message;
      }
    );

  }

  historicoEquipo(equipo:EquipoEstadistica){
    this.navCtrl.push(HistoricoEquipoPage,{'equipo':equipo});
  }

}
