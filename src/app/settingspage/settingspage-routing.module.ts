import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingspagePage } from './settingspage.page';

const routes: Routes = [
  {
    path: '',
    component: SettingspagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingspagePageRoutingModule {}
