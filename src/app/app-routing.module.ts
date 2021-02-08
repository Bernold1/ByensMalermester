import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'private',
    loadChildren: () =>
      import('./private/private.module').then((m) => m.PrivateModule),
  },
  {
    path: 'offentlig',
    loadChildren: () =>
      import('./institutions/institutions.module').then(
        (m) => m.InstitutionsModule
      ),
  },
  {
    path: 'boligforening',
    loadChildren: () =>
      import('./boligforeninger/boligforeninger.module').then(
        (m) => m.BoligforeningerModule
      ),
  },
  {
    path: 'butik',
    loadChildren: () =>
      import('./butik/butik-routing.module').then((m) => m.ButikRoutingModule),
  },
  {
    path: 'enterpriser',
    loadChildren: () =>
      import('./enterpriser/enterpriser.module').then(
        (m) => m.EnterpriserModule
      ),
  },
  {
    path: 'kontakt',
    loadChildren: () =>
      import('./kontakt/kontakt.module').then((m) => m.KontaktModule),
  },
  {
    path: 'gallery',
    loadChildren: () =>
      import('./gallery/gallery.module').then((m) => m.GalleryModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
