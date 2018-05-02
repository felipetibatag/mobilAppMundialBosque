import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GanadoresPage } from './ganadores';

@NgModule({
  declarations: [
    GanadoresPage,
  ],
  imports: [
    IonicPageModule.forChild(GanadoresPage),
  ],
})
export class GanadoresPageModule {}
