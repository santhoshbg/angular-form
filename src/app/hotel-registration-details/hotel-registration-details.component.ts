import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hotel-registration-details',
  templateUrl: './hotel-registration-details.component.html',
  styleUrls: ['./hotel-registration-details.component.scss']
})
export class HotelRegistrationDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  formData: {};

  ngOnInit() {
      this.formData = this.route.snapshot.params;
  }

}
