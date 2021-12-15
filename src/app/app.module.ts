import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlanesComponent } from './planes/planes.component';
import { TrainsComponent } from './trains/trains.component';
import { CarsComponent } from './cars/cars.component';
import { BikesComponent } from './bikes/bikes.component';

@NgModule({
  declarations: [
    AppComponent,
    PlanesComponent,
    TrainsComponent,
    CarsComponent,
    BikesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
