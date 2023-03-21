import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settingspage',
  templateUrl: './settingspage.page.html',
  styleUrls: ['./settingspage.page.scss'],
})
export class SettingspagePage implements OnInit {

  selectedSize: number = 0;
  selectedSizeString: string = '';

  toggleLabel = 'DARK MODE';

  toggleLabel2 = '';

  constructor() { }

  toggleSize(){
    this.selectedSize = Math.round(this.selectedSize);
  }

  DisplaySetSize(){
    switch (this.selectedSize) {
      case 1:
        this.selectedSizeString = 'MEDIUM';
        break;
      case 2:
        this.selectedSizeString = 'LARGE';
        break;
      case 3:
        this.selectedSizeString = 'LARGER';
        break;
      case 4:
        this.selectedSizeString = 'LARGEST';
        break;
      default:
        this.selectedSizeString = 'SMALL';
        break;
    }
  }

  ngOnInit() {
  }

  LightDarkMode(event: CustomEvent){
    if(event.detail.checked){
      this.toggleLabel = 'LIGHT MODE';
    }
    else {
      this.toggleLabel = 'DARK MODE';

    }
  }

}
