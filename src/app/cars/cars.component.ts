import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  showCars : boolean = true;
  showMan: boolean = false;
  manufacturers: string[] =["Hyundai Motor","Stellantis","SAIC Motor","BMW Group","Honda Motor","General Motors","Ford Motor","Daimler",
  "Toyota Motor","Volkswagen Group"];
  revenue: number[] =[88.1,98.8,106.7,112.8,121.8,122.5,127.1,175.9,249.4,254.1]
  cars: string[] =["Mercedes Benz Maybach Exelero","Bugatti Centodieci",
  "Rolls Royce Sweptail","Pagani Zonda HP Barchetta","Bugatti La Voiture Noire"]
  price: string[] = ["$8 million","$9 million","$13 Million","$17 Million",
  "$18.7 million"]
  carPicture: string[] = ["https://cdn.wealthygorilla.com/wp-content/uploads/2019/05/Most-Expensive-Cars-Mercedes-Maybach-Exelero.webp",
  "https://cdn.wealthygorilla.com/wp-content/uploads/2020/05/Most-Expensive-Cars-Bugatti-Centodieci.webp",
  "https://cdn.wealthygorilla.com/wp-content/uploads/2019/05/Most-Expensive-Cars-Rolls-Royce-Sweptail.webp",
  "https://cdn.wealthygorilla.com/wp-content/uploads/2020/05/Most-Expensive-Cars-Pagani-Zonda-HP-Barchetta.webp",
  "https://cdn.wealthygorilla.com/wp-content/uploads/2020/05/Most-Expensive-Cars-Bugatti-La-Voiture-Noire.webp"]

  constructor() { }

  ngOnInit(): void {
  }
  toggleView(viewNumber:number){

    if(viewNumber ==0){
      this.showCars = true;
      this.showMan = false;
    }else if(viewNumber == 1){
      this.showCars = false;
      this.showMan = true;
    }
  }
}
