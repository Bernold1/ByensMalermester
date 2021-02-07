import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoligforeningerRoutingModule } from './boligforeninger-routing.module';
import { BoligforeningerComponent } from './boligforeninger/boligforeninger.component';


@NgModule({
  declarations: [BoligforeningerComponent],
  imports: [
    CommonModule,
    BoligforeningerRoutingModule
  ]
})
export class BoligforeningerModule { }
