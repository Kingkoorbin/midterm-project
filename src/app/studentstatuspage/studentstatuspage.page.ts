import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-studentstatuspage',
  templateUrl: './studentstatuspage.page.html',
  styleUrls: ['./studentstatuspage.page.scss'],
})
export class StudentstatuspagePage implements OnInit {

  selectedValue: string | undefined;

  constructor(private navCtrl: NavController) { }

  Navigation(){
    if (this.selectedValue === 'ns' || this.selectedValue === 't'){
      this.navCtrl.navigateForward('newandtransferstudent');
    } else {
      this.navCtrl.navigateForward('oldstudent');
    }
  }


  ngOnInit() {
  }

}
