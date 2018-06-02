import { Component } from '@angular/core';
<<<<<<< HEAD
import { NavController, NavParams,ViewController, LoadingController } from 'ionic-angular';
import { WbsProvider } from '../../providers/wbs/wbs';
=======
import { NavController, NavParams } from 'ionic-angular';
>>>>>>> rama_TabGanadores


@Component({
  selector: 'page-ganadores',
  templateUrl: 'ganadores.html',
})
export class GanadoresPage {
  equiposE:any[]=[];
  public fallo:boolean;
  public msgFallo:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,public _wbsProvider:WbsProvider,
    public ctrlVwr:ViewController, private loadCtrl:LoadingController
  ) {
  }

  ionViewDidLoad(){
    let ventanaCargando=this.loadCtrl.create({
      content:'Cargando Estadísticas'
    });

    ventanaCargando.present().then(()=>{
      this.equiposE=[];
    this._wbsProvider.getGanadores().subscribe(
      data=>{
        this.equiposE=this.equiposE.concat(data);
        console.log("Imprimiendo desde Ganadores");
        console.log(this.equiposE);
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
    console.log("Refrescando con did");
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

<<<<<<< HEAD
=======
  ionViewDidLoad() {
    //console.log('ionViewDidLoad GanadoresPage');
>>>>>>> rama_TabGanadores
  }

  reintentarConexion(e){
    this.ctrlVwr._didEnter();
  }



}
