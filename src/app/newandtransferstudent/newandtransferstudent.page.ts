import { alertController } from '@ionic/core';
import { Component, OnInit, ViewChild, QueryList, ViewChildren } from '@angular/core';
import { SettingspagePage } from '../settingspage/settingspage.page';
import { FormsModule } from '@angular/forms';
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

  selectedCourse: string = '';
  sub1: boolean = false;
  sub2: boolean = false;
  sub3: boolean = false;
  sub4: boolean = false;
  sub5: boolean = false;
  sub6: boolean = false;
  sub7: boolean = false;
  req1: boolean = false;
  req2: boolean = false;
  req3: boolean = false;
  req4: boolean = false;
  ntLastName: string = '';
  ntMiddleName: string = '';
  ntFirstName: string = '';
  ntAddress: string = '';
  ntContactNumber: string = '';
  ntBloodType: string = '';
  ntBirthDate: string = '';
  totalAmount: number = 0;
  totalAmountClass = '';



  constructor(private navCtrl: NavController, private alertCtrl: AlertController) {

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
 calculateTotal() {
  this.totalAmount = 0;
  const checkboxes = document.querySelectorAll('ion-checkbox');
  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i]['checked']) {
      this.totalAmount += 5;
    }
  }
  this.totalAmountClass = this.totalAmount <= 30 ? 'green-text' : 'red-text';
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
  const ntTotalAmount = this.totalAmount;
  const ntContactNumber = document.getElementById('contactnumber-nt') as HTMLIonInputElement;



  let selectedSubs = {
    sub1: this.sub1,
    sub2: this.sub2,
    sub3: this.sub3,
    sub4: this.sub4,
    sub5: this.sub5,
    sub6: this.sub6,
    sub7: this.sub7,
    req1: this.req1,
    req2: this.req2,
    req3: this.req3,
    req4: this.req4,
  }

  const navigationExtra = {
    queryParams: {
      ntLastname: ntLastname.value,
      ntMiddlename: ntMiddlename.value,
      ntFirstname: ntFirstname.value,
      ntAddress: ntAddress.value,
      ntBloodType: ntBloodType.value,
      ntBirthDate: ntBirthDate.value,
      ntNumran: ntNumran,
      ntTotalAmount: ntTotalAmount,
      ntContactNumber: ntContactNumber.value,
      selectedCourse: this.selectedCourse,
      selectedSubs: JSON.stringify(selectedSubs),
    }
  }
  this.navCtrl.navigateForward('enrollmentconfirm', navigationExtra);
}
}
