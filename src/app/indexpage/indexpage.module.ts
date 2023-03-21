import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndexpagePageRoutingModule } from './indexpage-routing.module';

import { IndexpagePage } from './indexpage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndexpagePageRoutingModule
  ],
  declarations: [IndexpagePage]
})
export class IndexpagePageModule {}
