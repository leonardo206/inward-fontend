import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeApproachComponent } from './home-approach.component';

describe('HomeApproachComponent', () => {
  let component: HomeApproachComponent;
  let fixture: ComponentFixture<HomeApproachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeApproachComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeApproachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
