import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OldstudentPage } from './oldstudent.page';

const routes: Routes = [
  {
    path: '',
    component: OldstudentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OldstudentPageRoutingModule {}
