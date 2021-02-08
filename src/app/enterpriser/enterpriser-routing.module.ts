import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnterpriserComponent } from './enterpriser/enterpriser.component';

const routes: Routes = [{ path: '', component: EnterpriserComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnterpriserRoutingModule {}
