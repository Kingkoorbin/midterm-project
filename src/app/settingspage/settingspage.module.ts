import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SettingspagePageRoutingModule } from './settingspage-routing.module';

import { SettingspagePage } from './settingspage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SettingspagePageRoutingModule
  ],
  declarations: [SettingspagePage]
})
export class SettingspagePageModule {}
