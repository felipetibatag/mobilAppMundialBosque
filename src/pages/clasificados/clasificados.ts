import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { WbsProvider } from '../../providers/wbs/wbs';
import { Equipo } from '../../models/Equipo';



@Component({
  selector: 'page-clasificados',
  templateUrl: 'clasificados.html',
})
export class ClasificadosPage {

  equipos:Equipo[]=[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public _wbsProvider: WbsProvider) {
    this.cargarEquiposPorGrupo();
  }

  cargarEquiposPorGrupo(){
    this._wbsProvider.getEquiposPorGrupo().subscribe(
      data=>{
        this.equipos=this.equipos.concat(data);
      },
      error=>{
        console.log(error);
      }
    );

  }

}
