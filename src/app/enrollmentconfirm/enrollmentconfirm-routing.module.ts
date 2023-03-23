import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnrollmentconfirmPage } from './enrollmentconfirm.page';

const routes: Routes = [
  {
    path: '',
    component: EnrollmentconfirmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnrollmentconfirmPageRoutingModule {}
