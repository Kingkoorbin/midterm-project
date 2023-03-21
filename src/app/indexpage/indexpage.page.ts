import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { StudentstatuspagePage } from '../studentstatuspage/studentstatuspage.page';

@Component({
  selector: 'app-indexpage',
  templateUrl: './indexpage.page.html',
  styleUrls: ['./indexpage.page.scss'],
})
export class IndexpagePage implements OnInit {

  constructor(private navCtrl: NavController) { }

  goToStudentStatus(){
    this.navCtrl.navigateForward('studentstatuspage');
  }

  ngOnInit() {
  }

}
