import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ViewController } from 'ionic-angular';
import { WbsProvider } from '../../providers/wbs/wbs';
import { EquipoEstadistica } from '../../models/EquipoEstadistica';
import { HistoricoEquipo } from '../../models/HistoricoEquipo';


@Component({
  selector: 'page-historico-equipo',
  templateUrl: 'historico-equipo.html',
})
export class HistoricoEquipoPage {

  public fallo:boolean;
  public msgFallo:string;

  equipo:EquipoEstadistica;
  equipos:HistoricoEquipo[]=[];
  cod_pais:string;
  pais:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public _wbsProvider:WbsProvider,
              public loading:LoadingController,private ctrlVwr:ViewController) {
    this.cod_pais=this.navParams.get('equipo').cod_pais;
    this.pais=this.navParams.get('equipo').nombre;
  }

  ionViewDidLoad(){
    let ventanaCargando=this.loading.create({
      content:"Cargando historico.."
    });
    ventanaCargando.present().then(()=>{
      this._wbsProvider.getHistorialEquipo(this.navParams.get('equipo')).subscribe(
        data=>{
          this.equipos=this.equipos.concat(data);
          this.fallo=false;
        },
        error=>{
          console.log(error);
          this.fallo=true;
        }
      );
      ventanaCargando.dismiss();
    });
  }


  reintentarConexion(e){
    this.ctrlVwr._didEnter();
  }


}
