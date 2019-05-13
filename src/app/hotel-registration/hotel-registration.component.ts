import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-hotel-registration',
  templateUrl: './hotel-registration.component.html',
  styleUrls: ['./hotel-registration.component.scss']
})
export class HotelRegistrationComponent implements OnInit {

  model;
  hotelRegistrationForm = 'Hotel Registration Form';
  name  = 'Name';
  email = 'Email';
  register = 'Register';
  firstNameRequired  = 'First Name is required';
  emailRequired = 'Email is required';
  validEmailAddress = 'Email must be a valid email address';

  registerForm: FormGroup;
  submitted = false;
  isDisabled = true;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      fromDate: ['', Validators.required],
      toDate: ['', Validators.required],
    });
  }

  get f() {
    return this.registerForm.controls;
  }
  // is Disabled textbox
  triggerSomeEvent() {
    this.isDisabled = !this.isDisabled;
    return;
}

// cahngeStatus(index) {
//   peoples[index].status = !peoples[index].status;
// }

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value));
    console.log('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value));
  }

}
