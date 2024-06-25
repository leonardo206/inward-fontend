import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtaSliderComponent } from './cta-slider.component';

describe('CtaSliderComponent', () => {
  let component: CtaSliderComponent;
  let fixture: ComponentFixture<CtaSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CtaSliderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CtaSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
