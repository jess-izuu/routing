import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanesComponent } from './planes/planes.component';
import { TrainsComponent } from './trains/trains.component';
import { CarsComponent } from './cars/cars.component';
import { BikesComponent } from './bikes/bikes.component';

const routes: Routes = [
  { path: 'planes', component: PlanesComponent },
  { path: 'trains', component: TrainsComponent },
  { path: 'cars', component: CarsComponent },
  { path: 'bikes', component: BikesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
