import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KontaktRoutingModule } from './kontakt-routing.module';
import { KontaktComponent } from './kontakt/kontakt.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [KontaktComponent],
  imports: [
    CommonModule,
    KontaktRoutingModule,
    MatGridListModule,
    MatIconModule,
  ],
})
export class KontaktModule {}
