import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClockDateComponent } from './clock-date.component';

describe('ClockDateComponent', () => {
  let component: ClockDateComponent;
  let fixture: ComponentFixture<ClockDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClockDateComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ClockDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
