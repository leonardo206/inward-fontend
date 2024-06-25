import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeStrategiesComponent } from './home-strategies.component';

describe('HomeStrategiesComponent', () => {
  let component: HomeStrategiesComponent;
  let fixture: ComponentFixture<HomeStrategiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeStrategiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeStrategiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
