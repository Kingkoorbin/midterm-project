import { alertController } from '@ionic/core';
import { Component, OnInit, ViewChild, QueryList, ViewChildren } from '@angular/core';
import { SettingspagePage } from '../settingspage/settingspage.page';
import { IonThumbnail, NavController } from '@ionic/angular';
import { EnrollmentconfirmPage } from '../enrollmentconfirm/enrollmentconfirm.page';
import { IonCheckbox } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-newandtransferstudent',
  templateUrl: './newandtransferstudent.page.html',
  styleUrls: ['./newandtransferstudent.page.scss'],
})
export class NewandtransferstudentPage implements OnInit {

  numRan: number = 0;

  selectedCourse: string;
  subjects: string[];
  units: number[];
  selectedSubjects: string[] = [];

  ntLastName: string = '';
  ntMiddleName: string = '';
  ntFirstName: string = '';
  ntAddress: string = '';
  ntContactNumber: string = '';
  ntBloodType: string = '';
  ntBirthDate: string = '';


  constructor(private navCtrl: NavController, private alertCtrl: AlertController) {
    this.selectedCourse = '';
    this.subjects = [];
    this.units = [];

   }

   calculateTotalUnits() {
    let totalUnits = 0;
    for (let i = 0; i < this.subjects.length; i++) {
      if (this.selectedSubjects[i]) {
        totalUnits += this.units[i];
      }
    }
    return totalUnits;
  }


   onCourseSelection() {
    this.subjects = [];
    this.units = [];

    switch (this.selectedCourse) {
      case 'BSIT':
        this.subjects = ['IT 209', 'IT 208', 'IT 207', 'IT 301', 'IT 101', 'IT 102', 'IT 103' ];
        this.units = [5, 5, 5, 5, 5, 5, 5];
        break;
      case 'BSIS':
        this.subjects = ['IS 201', 'IS 202', 'IS 203', 'IS 204', 'IS 205', 'IS 206', 'IS 207'];
        this.units = [5, 5, 5, 5, 5, 5, 5];
        break;
      case 'BAEL':
        this.subjects = ['EL 203', 'EL 204', 'EL 205', 'EL 206', 'EL 207', 'EL 208', 'EL 209'];
        this.units = [5, 5, 5, 5, 5, 5, 5];
        break;
      default:
        break;
    }
  }


  ngOnInit() {
  }
  goToSettings(){
    this.navCtrl.navigateForward('settingspage');
  }
  ionViewDidEnter() {
    this.numRan=this.random();
   }
  random(): number {
    let rand = Math.floor(Math.random()*20)+2000;
    return rand;
 }
getTotalUnitsColor() {
  const totalUnits = this.calculateTotalUnits();
  return totalUnits <= 30 ? 'green' : 'red';
}
checkValidity() {
  const ntLastname = document.getElementById('lastname-nt') as HTMLIonInputElement;
  const ntMiddlename = document.getElementById('middlename-nt') as HTMLIonInputElement;
  const ntFirstname = document.getElementById('firstname-nt') as HTMLIonInputElement;
  const ntAddress = document.getElementById('address-nt') as HTMLIonInputElement;
  const ntBloodType = document.getElementById('bloodtype-nt') as HTMLIonInputElement;
  const ntBirthDate = document.getElementById('birthdate-nt') as HTMLIonInputElement;
  const ntContactNumber = document.getElementById('contactnumber-nt') as HTMLIonInputElement;
  if (!ntLastname.value || !ntMiddlename.value || !ntFirstname.value || !ntAddress.value || !ntBloodType.value || !ntBirthDate.value || !ntContactNumber.value){
    const alert = this.alertCtrl.create({message: "Please Fill out the information.", buttons: ['OK'] });
    alert.then((alert) => alert.present());
  } else{
    this.goToEnrollmentConfirm();
  }
}


goToEnrollmentConfirm(){
  const ntLastname = document.getElementById('lastname-nt') as HTMLIonInputElement;
  const ntMiddlename = document.getElementById('middlename-nt') as HTMLIonInputElement;
  const ntFirstname = document.getElementById('firstname-nt') as HTMLIonInputElement;
  const ntAddress = document.getElementById('address-nt') as HTMLIonInputElement;
  const ntBloodType = document.getElementById('bloodtype-nt') as HTMLIonInputElement;
  const ntBirthDate = document.getElementById('birthdate-nt') as HTMLIonInputElement;
  const ntNumran = this.numRan;
  const ntContactNumber = document.getElementById('contactnumber-nt') as HTMLIonInputElement;


  const navigationExtra = {
    queryParams: {
      ntLastname: ntLastname.value,
      ntMiddlename: ntMiddlename.value,
      ntFirstname: ntFirstname.value,
      ntAddress: ntAddress.value,
      ntBloodType: ntBloodType.value,
      ntBirthDate: ntBirthDate.value,
      ntNumran: ntNumran,
      ntContactNumber: ntContactNumber.value,
      selectedCourse: this.selectedCourse,
      selectedSubjects: this.selectedSubjects,
      totalUnits: this.calculateTotalUnits(),

    }
  }
  this.navCtrl.navigateForward('enrollmentconfirm', navigationExtra);
}
}
