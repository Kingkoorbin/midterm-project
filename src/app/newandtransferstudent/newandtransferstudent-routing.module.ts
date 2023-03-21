import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewandtransferstudentPage } from './newandtransferstudent.page';

const routes: Routes = [
  {
    path: '',
    component: NewandtransferstudentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewandtransferstudentPageRoutingModule {}
