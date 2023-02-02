import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThankyouOrderConfirmComponent } from './thankyou-order-confirm.component';

describe('ThankyouOrderConfirmComponent', () => {
  let component: ThankyouOrderConfirmComponent;
  let fixture: ComponentFixture<ThankyouOrderConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThankyouOrderConfirmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThankyouOrderConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
