import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, LoadingController } from 'ionic-angular';
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
  constructor(public navCtrl: NavController,public navParams: NavParams,public _wbsProvider:WbsProvider,
    public ctrlVwr:ViewController, private loadCtrl:LoadingController
  ){
  }

  ionViewDidLoad(){
    let ventanaCargando=this.loadCtrl.create({
      content:'Cargando Estadísticas'
    });

    ventanaCargando.present().then(()=>{
      this.equiposE=[];
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
      ventanaCargando.dismiss();
    })

  }
  ionViewDidEnter(){

    if(this.fallo){
      let ventanaCargando=this.loadCtrl.create({
        content:'Cargando Estadísticas'
      });

      ventanaCargando.present().then(()=>{
        this.equiposE=[];
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
        ventanaCargando.dismiss();
      })
    }

  }

  reintentarConexion(e){
    this.ctrlVwr._didEnter();
  }



  historicoEquipo(equipo:EquipoEstadistica){
    this.navCtrl.push(HistoricoEquipoPage,{'equipo':equipo});
  }

}
