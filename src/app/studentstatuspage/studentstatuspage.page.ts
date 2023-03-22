import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { alertController } from '@ionic/core';
import { SettingspagePage } from '../settingspage/settingspage.page';

@Component({
  selector: 'app-studentstatuspage',
  templateUrl: './studentstatuspage.page.html',
  styleUrls: ['./studentstatuspage.page.scss'],
})
export class StudentstatuspagePage implements OnInit {
  selectedValue: string | undefined;

  constructor(
    private navCtrl: NavController,
    private alertController: AlertController
  ) {}

  Navigation() {
    if (!this.selectedValue) {
      const alert = this.alertController.create({
        header: 'Identify Student Status',
        buttons: ['OK'],
      });
      alert.then((alert) => alert.present());
    } else if (this.selectedValue === 'ns' || this.selectedValue === 't') {
      this.navCtrl.navigateForward('newandtransferstudent');
    } else {
      this.navCtrl.navigateForward('oldstudent');
    }
  }
  goToSettings() {
    this.navCtrl.navigateForward('settingspage');
  }

  ngOnInit() {}
}
