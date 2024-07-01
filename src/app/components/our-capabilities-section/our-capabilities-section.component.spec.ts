import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurCapabilitiesSectionComponent } from './our-capabilities-section.component';

describe('OurCapabilitiesSectionComponent', () => {
  let component: OurCapabilitiesSectionComponent;
  let fixture: ComponentFixture<OurCapabilitiesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurCapabilitiesSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurCapabilitiesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
