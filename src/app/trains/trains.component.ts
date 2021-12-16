import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trains',
  templateUrl: './trains.component.html',
  styleUrls: ['./trains.component.css'],
})
export class TrainsComponent implements OnInit {
  isArrival: boolean = true;
  isDeparture: boolean = false;
  isRed: boolean = false;
  isBlue: boolean = true;

  // If Arrival Dropdown is Clicked, isArrival = True & isDeparture = false
  arriveDepart() {
    this.isArrival = !this.isArrival;
    this.isDeparture = !this.isDeparture;
    this.isRed = !this.isRed;
    this.isBlue = !this.isBlue;
  }

  // If Departure Dropdown is Clicked, isArrival = False & isDeparture = true
  displayDepartures() {
    this.isArrival = !this.isArrival;
    this.isDeparture = !this.isDeparture;
  }

  constructor() {}

  ngOnInit(): void {}
}
