import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnrollmentconfirmPageRoutingModule } from './enrollmentconfirm-routing.module';

import { EnrollmentconfirmPage } from './enrollmentconfirm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnrollmentconfirmPageRoutingModule
  ],
  declarations: [EnrollmentconfirmPage]
})
export class EnrollmentconfirmPageModule {}
