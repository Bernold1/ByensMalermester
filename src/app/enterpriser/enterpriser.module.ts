import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnterpriserRoutingModule } from './enterpriser-routing.module';
import { EnterpriserComponent } from './enterpriser/enterpriser.component';


@NgModule({
  declarations: [EnterpriserComponent],
  imports: [
    CommonModule,
    EnterpriserRoutingModule
  ]
})
export class EnterpriserModule { }
