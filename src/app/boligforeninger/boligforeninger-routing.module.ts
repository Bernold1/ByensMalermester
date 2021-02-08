import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButikComponent } from '../butik/butik/butik.component';
import { BoligforeningerComponent } from './boligforeninger/boligforeninger.component';

const routes: Routes = [{ path: '', component: BoligforeningerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoligforeningerRoutingModule {}
