import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagen',
})
export class ImagenPipe implements PipeTransform {
  /**
   * <img src="http://www.countryflags.io/country_code/style/size.png">
   *
   * **/
  url="http://www.countryflags.io";

  transform(value: string,estilo:string="shiny",tamanio:string="64") {
    let ruta:string=null;
    ruta=this.url+"/"+value+"/"+estilo+"/"+tamanio+".png";
    return ruta;
  }
}
