import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentstatuspagePage } from './studentstatuspage.page';

const routes: Routes = [
  {
    path: '',
    component: StudentstatuspagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentstatuspagePageRoutingModule {}
