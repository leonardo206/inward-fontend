import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutWelcomeSectionComponent } from './about-welcome-section.component';

describe('AboutWelcomeSectionComponent', () => {
  let component: AboutWelcomeSectionComponent;
  let fixture: ComponentFixture<AboutWelcomeSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutWelcomeSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutWelcomeSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
