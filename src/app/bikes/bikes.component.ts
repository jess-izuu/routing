import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.css'],
})
export class BikesComponent implements OnInit {
  selectedOption: string;
  printOption: string;
  ports: string[] = ['Washington D.C.', 'New York', 'Chicago', 'Bay Area'];
  isDC: boolean = false;
  isNY: boolean = false;
  isCHI: boolean = false;
  isBA: boolean = false;

  print() {
    if (this.selectedOption == 'Washington D.C.') {
      this.isDC = true;
      this.isNY = false;
      this.isCHI = false;
      this.isBA = false;
    } else if (this.selectedOption == 'New York') {
      this.isDC = false;
      this.isNY = true;
      this.isCHI = false;
      this.isBA = false;
    } else if (this.selectedOption == 'Chicago') {
      this.isDC = false;
      this.isNY = false;
      this.isCHI = true;
      this.isBA = false;
    } else if (this.selectedOption == 'Bay Area') {
      this.isDC = false;
      this.isNY = false;
      this.isCHI = false;
      this.isBA = true;
    }
    this.printOption = this.selectedOption;
  }
  //isDC = True
  // isDC: boolean = true;
  // isNY: boolean = false;
  // isCHI: boolean = false;
  // isBA: boolean = false;

  //isNY = True
  // isDC: boolean = false;
  // isNY: boolean = true;
  // isCHI: boolean = false;
  // isBA: boolean = false;

  //isCHI = True
  // isDC: boolean = false;
  // isNY: boolean = false;
  // isCHI: boolean = true;
  // isBA: boolean = false;

  //isBA = True
  // isDC: boolean = false;
  // isNY: boolean = false;
  // isCHI: boolean = false;
  // isBA: boolean = true;

  constructor() {
    this.selectedOption = '';
    this.printOption = '';
  }

  ngOnInit(): void {}
}
