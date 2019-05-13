import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelRegistrationDetailsComponent } from './hotel-registration-details.component';

describe('HotelRegistrationDetailsComponent', () => {
  let component: HotelRegistrationDetailsComponent;
  let fixture: ComponentFixture<HotelRegistrationDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelRegistrationDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelRegistrationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
