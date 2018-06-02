import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {URL_SERVICES} from '../URL';
import {Observable} from 'rxjs/Observable'
import { Equipo } from '../../models/Equipo';
import { EquipoEstadistica } from '../../models/EquipoEstadistica';


@Injectable()
export class WbsProvider {

  constructor(public http: HttpClient) {
    console.log('Hello WbsProvider Provider');
  }

  getEquiposPorGrupo():Observable<any>{
    let url=URL_SERVICES + "/equipoPorGrupo";
    return this.http.post(url,0);
  }

  getEstadisticasGenerales():Observable<any>{
    let url=URL_SERVICES +"/estadisticasGenerales";
    return this.http.post(url,0);
  }

  getHistorialEquipo(equipo:EquipoEstadistica):Observable<any>{
    let url=URL_SERVICES +"/historicoPartidosPorEquipo?id="+equipo.id;
    console.log("Pediria : " + url );
    return this.http.post(url,0);
  }


  getGanadores():Observable<any>{
    let url=URL_SERVICES +"/ganadores";
    return this.http.post(url,0);
  }



}
