import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexpagePage } from './indexpage.page';

const routes: Routes = [
  {
    path: '',
    component: IndexpagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndexpagePageRoutingModule {}
