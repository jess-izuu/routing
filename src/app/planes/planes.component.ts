import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planes',
  templateUrl: './planes.component.html',
  styleUrls: ['./planes.component.css']
})
export class PlanesComponent implements OnInit {
  isShownn: boolean = true;
  isHiddenn: boolean= false;
  showPlanes : boolean = true;
  showAircrafts: boolean = false;
  showClassification: boolean = false;
  typesCrafts: string[] =["Amphibious","Helicopters","Taildraggers"];
  descCrafts: string[] =["Amphibious aircraft, otherwise also popularly known as amphibian is a multipurpose aircraft which can work, take off and land both water and ground. They are used as both seaplanes or flying boats, or also airplanes. In this aircraft, the engine is either placed in front, or even above the wing, that is most commonly found in floatplanes, On the other hand, the modern and other amphibious aircraft have engine and propeller placed above the wings.",
  "Helicopter aircraft, also known as a chopper, is commonly known to most of us and belongs to rotorcrafts. Horizontally spinning rotors help and aid the helicopter to lift and thrust. These aircraft have the advantage of taking vertically, horizontally, and fly both backward and forward or laterally",
  "Taildraggers, also known as tail-wheel type gear draggers, consists of two main wheels at the forward size and a small-sized wheel to skid near the tail area. These are the conventional aircraft variety which uses such gear draggers instead of the modern tricycle propeller aircraft. These are the much lighter size and weight aircraft and can even be operated in skis. "];
  typeClass: string[] = ["Aerostats (Lighter Than Air)","Aerodynes (Heavier Than Air)"];
  descClass: string[] = ["Aerostats or lighter than air aircrafts are very more lightweight in weight. These types of light aircraft generally use buoyancy like ships, which help them float in the air. Low-density gas such as hydrogen, helium, or hot air balloons is used to fill in the aircraft. This low-density gas is lighter than air, and hence the name.",
  "Alternatively, the other aircraft, heavier than air or aerodynes, as we understand, is much higher in weight and size. They push the gas or air downwards; which reaction helps to make aircraft upwards. Since these are dynamic through movements in the air, they are called aerodynes."];
  types: string[] =["Turboprop","Piston","Jets"]
  desc: string[] = ["The turboprop aircraft has one or more gas turbine engines. They are both connected to a gearbox which turns the propellers.They are well suited to flying for 600 to 1000 miles in a single flight, and a much cheaper option to private jets",
  "These resemble turboprop aircraft but are much smaller. They have one more piston-powered engines that are connected to the propellers. They are also incapable of flying at the high altitudes that the turboprop aircraft fly at. The typical piston aircraft can seat around one to six people, which seats that are in rows of two. Piston aircraft don’t need long runways to fly and don’t need traffic control towers to navigate.",
  "Jet planes are known for their speed and power as compared to normal aircraft. They achieve maximum efficiency at high speeds and so can even go supersonic (faster than the speed of sound). Jet aircraft can usually go at around Mach 0.8 (609 miles per hour), and fly at altitudes of 49,000 feet."]

  constructor() { }

  ngOnInit(): void {
  }
  toggleView(viewNumber:number){
    if(viewNumber ==0){
      this.showPlanes = true;
      this.showAircrafts = false;
      this.showClassification = false;
    }else if(viewNumber == 1){
      this.showPlanes = false;
      this.showAircrafts = true;
      this.showClassification = false;
    }else{
      this.showPlanes = false;
      this.showAircrafts = false;
      this.showClassification = true;
    }
  }
  toggleVisible(){
    this.isShownn = !this.isShownn
    this.isHiddenn = !this.isHiddenn
  }

}
