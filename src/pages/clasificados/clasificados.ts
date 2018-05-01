import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { WbsProvider } from '../../providers/wbs/wbs';
import { Equipo } from '../../models/Equipo';
import { ERR_PLUGIN_NOT_INSTALLED } from '@ionic-native/core';



@Component({
  selector: 'page-clasificados',
  templateUrl: 'clasificados.html',
})
export class ClasificadosPage {



  equipos:Equipo[]=[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public _wbsProvider: WbsProvider,
              private alertCtrl:AlertController) {
  }

  ionViewDidLoad(){
    this.cargarEquiposPorGrupo();
    console.log("1");
  }

  ionViewWillEnter(){
    this.alerta("E");
  }


  cargarEquiposPorGrupo(){
    this._wbsProvider.getEquiposPorGrupo().subscribe(
      data=>{
        this.equipos=this.equipos.concat(data);
      },
      error=>{
        console.log(error);
        this.alerta(error);
      }
    );

  }

  alerta(error:any){
    let mensajeAlerta=this.alertCtrl.create({
      title:'Se presento un error',
      subTitle:error.message + ", Verifique su conexión",
      buttons:['ok']
    });
    mensajeAlerta.present();
  }

}
