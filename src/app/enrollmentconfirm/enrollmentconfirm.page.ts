import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { SettingspagePage } from '../settingspage/settingspage.page';
import { NewandtransferstudentPage } from '../newandtransferstudent/newandtransferstudent.page';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-enrollmentconfirm',
  templateUrl: './enrollmentconfirm.page.html',
  styleUrls: ['./enrollmentconfirm.page.scss'],
})
export class EnrollmentconfirmPage implements OnInit {

  ntLastname: string = 'ntLastname';
  ntMiddlename: string = 'ntMiddlename';
  ntFirstname: string = 'ntFirstname';
  ntAddress: string = 'ntAddress';
  ntBloodType: string = 'ntBloodType';
  ntBirthDate: string = 'ntBirthDate';
  ntNumran: string = 'ntNumRan';
  ntContactNumber: string = 'ntContactNumber';
  selectedCourse: string = 'SelectedCourse';
  selectedSubs: any;
  totalAmount: number = 0;

  goToSettings(){
    this.navCtrl.navigateForward('settingspage');
  }

  constructor(private navCtrl: NavController, private ActivatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.ActivatedRoute.queryParams.subscribe((params) => {
      this.ntLastname = params['ntLastname'];
      this.ntMiddlename = params['ntMiddlename'];
      this.ntFirstname = params['ntFirstname'];
      this.ntAddress = params['ntAddress'];
      this.ntBloodType = params['ntBloodType'];
      this.ntBirthDate = params['ntBirthDate'];
      this.ntNumran = params['ntNumran'];
      this.ntContactNumber = params['ntContactNumber'];
      this.selectedCourse = params['selectedCourse'];
      this.selectedSubs = params['selectedSubs'];
      this.totalAmount = Number(params['ntTotalAmount']);
    });
    }
    calculateTotalUnitCost(): number {
      const UNIT_COST = 726.35;
      const totalUnitCost = Math.ceil(this.totalAmount / 5) * UNIT_COST;
      return totalUnitCost;
    }
  }

