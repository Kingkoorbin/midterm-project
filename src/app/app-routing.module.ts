import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'indexpage',
    loadChildren: () => import('./indexpage/indexpage.module').then( m => m.IndexpagePageModule)
  },
  {
    path: 'studentstatuspage',
    loadChildren: () => import('./studentstatuspage/studentstatuspage.module').then( m => m.StudentstatuspagePageModule)
  },
  {
    path: 'newandtransferstudent',
    loadChildren: () => import('./newandtransferstudent/newandtransferstudent.module').then( m => m.NewandtransferstudentPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
