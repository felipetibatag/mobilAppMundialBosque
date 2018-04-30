import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {URL_SERVICES} from '../URL';
import {Observable} from 'rxjs/Observable'
import { Equipo } from '../../models/Equipo';


@Injectable()
export class WbsProvider {

  constructor(public http: HttpClient) {
    console.log('Hello WbsProvider Provider');
    console.log(URL_SERVICES);
  }

  getEquiposPorGrupo():Observable<any>{
    let url=URL_SERVICES + "/equipoPorGrupo";
    return this.http.post(url,0);
  }

  getEstadisticasGenerales():Observable<any>{
    let url=URL_SERVICES +"/estadisticasGenerales";
    return this.http.post(url,0);
  }



}
