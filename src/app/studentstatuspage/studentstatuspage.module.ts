import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudentstatuspagePageRoutingModule } from './studentstatuspage-routing.module';

import { StudentstatuspagePage } from './studentstatuspage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudentstatuspagePageRoutingModule
  ],
  declarations: [StudentstatuspagePage]
})
export class StudentstatuspagePageModule {}
