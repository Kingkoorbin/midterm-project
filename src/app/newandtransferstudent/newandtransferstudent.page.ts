import { Component, OnInit } from '@angular/core';
import { SettingspagePage } from '../settingspage/settingspage.page';
import { NavController } from '@ionic/angular';
import { EnrollmentconfirmPage } from '../enrollmentconfirm/enrollmentconfirm.page';

@Component({
  selector: 'app-newandtransferstudent',
  templateUrl: './newandtransferstudent.page.html',
  styleUrls: ['./newandtransferstudent.page.scss'],
})
export class NewandtransferstudentPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  goToSettings(){
    this.navCtrl.navigateForward('settingspage');
  }
  goToEnrollmentConfirm(){
    this.navCtrl.navigateForward('enrollmentconfirm');
  }

}
