import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { HotelRegistrationComponent } from '../app/hotel-registration/hotel-registration.component';
import { HotelRegistrationDetailsComponent } from '../app/hotel-registration-details/hotel-registration-details.component';

const routes: Routes = [
  {
    path: '',
    component: HotelRegistrationComponent
  },
  // { path: 'registration', component:  HotelRegistrationComponent},
  { path: 'registrationdetails', component: HotelRegistrationDetailsComponent },
  { path: '**', redirectTo: ''  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
