import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewandtransferstudentPageRoutingModule } from './newandtransferstudent-routing.module';

import { NewandtransferstudentPage } from './newandtransferstudent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewandtransferstudentPageRoutingModule
  ],
  declarations: [NewandtransferstudentPage]
})
export class NewandtransferstudentPageModule {}
