import { Component, OnInit } from '@angular/core';
import { SettingspagePage } from '../settingspage/settingspage.page';
import { NavController } from '@ionic/angular';
import { EnrollmentconfirmPage } from '../enrollmentconfirm/enrollmentconfirm.page';

@Component({
  selector: 'app-oldstudent',
  templateUrl: './oldstudent.page.html',
  styleUrls: ['./oldstudent.page.scss'],
})
export class OldstudentPage implements OnInit {

  radioSelected = false;

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  goToSettings(){
    this.navCtrl.navigateForward('settingspage');
  }

  goToEnrollmentConfirm(){
    this.navCtrl.navigateForward('enrollmentconfirm');
  }

  radioButtonSelected() {
    this.radioSelected = true;
 }
}
