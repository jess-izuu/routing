import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanesComponent } from './planes/planes.component';
import { TrainsComponent } from './trains/trains.component';
import { CarsComponent } from './cars/cars.component';
import { BikesComponent } from './bikes/bikes.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'planes', component: PlanesComponent },
  { path: 'trains', component: TrainsComponent },
  { path: 'cars', component: CarsComponent },
  { path: 'bikes', component: BikesComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
