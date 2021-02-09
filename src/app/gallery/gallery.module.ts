import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryComponent } from './gallery/gallery.component';
import { NgxMasonryModule } from 'ngx-masonry';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [GalleryComponent],
  imports: [
    CommonModule,
    GalleryRoutingModule,
    NgxMasonryModule,
    MatButtonModule,
  ],
})
export class GalleryModule {}
