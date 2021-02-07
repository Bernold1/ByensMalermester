import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButikRoutingModule } from './butik-routing.module';
import { ButikComponent } from './butik/butik.component';


@NgModule({
  declarations: [ButikComponent],
  imports: [
    CommonModule,
    ButikRoutingModule
  ]
})
export class ButikModule { }
