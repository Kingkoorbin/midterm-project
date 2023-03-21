import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OldstudentPageRoutingModule } from './oldstudent-routing.module';

import { OldstudentPage } from './oldstudent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OldstudentPageRoutingModule
  ],
  declarations: [OldstudentPage]
})
export class OldstudentPageModule {}
