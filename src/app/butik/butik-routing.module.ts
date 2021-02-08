import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButikComponent } from './butik/butik.component';

const routes: Routes = [{ path: '', component: ButikComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ButikRoutingModule {}
