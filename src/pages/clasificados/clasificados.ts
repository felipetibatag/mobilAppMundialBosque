import { Component } from '@angular/core';
import { NavController, NavParams, ViewController,LoadingController} from 'ionic-angular';
import { WbsProvider } from '../../providers/wbs/wbs';
import { Equipo } from '../../models/Equipo';



@Component({
  selector: 'page-clasificados',
  templateUrl: 'clasificados.html',
})
export class ClasificadosPage {

  public fallo:boolean;
  public msgFallo:string;


  equipos:Equipo[]=[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public _wbsProvider: WbsProvider,
              public ctrlVwr:ViewController, private loadCtrl:LoadingController
  ) {

  }
  ionViewDidLoad(){
    let ventanaCarga=this.loadCtrl.create({
      content:'Cargando Clasificados ...'
    });

    ventanaCarga.present().then(()=>{
      this.equipos=[];
    this._wbsProvider.getEquiposPorGrupo().subscribe(
      data=>{
        this.equipos=this.equipos.concat(data);
        this.fallo=false;
      },
      error=>{
        console.log(error);
        this.fallo=true;
        this.msgFallo=error.message;
      }
    );
      ventanaCarga.dismiss();
    });
  }


  ionViewDidEnter(){

    if(this.fallo){
      let ventanaCarga=this.loadCtrl.create({
        content:'Cargando Clasificados ...'
      });

      ventanaCarga.present().then(()=>{
        this.equipos=[];
      this._wbsProvider.getEquiposPorGrupo().subscribe(
        data=>{
          this.equipos=this.equipos.concat(data);
          this.fallo=false;
        },
        error=>{
          console.log(error);
          this.fallo=true;
          this.msgFallo=error.message;
        }
      );
        ventanaCarga.dismiss();
      });
    }

  }

  reintentarConexion(e){
    this.ctrlVwr._didEnter();
  }





}
