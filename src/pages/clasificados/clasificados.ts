import { Component } from '@angular/core';
import { NavController, NavParams, ViewController} from 'ionic-angular';
import { WbsProvider } from '../../providers/wbs/wbs';
import { Equipo } from '../../models/Equipo';
import { ERR_PLUGIN_NOT_INSTALLED } from '@ionic-native/core';



@Component({
  selector: 'page-clasificados',
  templateUrl: 'clasificados.html',
})
export class ClasificadosPage {

  public fallo:boolean;
  public msgFallo:string;


  equipos:Equipo[]=[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public _wbsProvider: WbsProvider,
              public ctrlVwr:ViewController
  ) {
  }

  ionViewDidLoad(){
    this.cargarEquiposPorGrupo();
  }
  ionViewDidEnter(){
    console.log("Refrescando con did");
    if(this.fallo){
      console.log("Se cayo la conexió")
      this.cargarEquiposPorGrupo();
    }

  }

  reintentarConexion(e){
    this.ctrlVwr._didEnter();
  }

  cargarEquiposPorGrupo(){
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

  }



}
