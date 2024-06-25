import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLatestProjectsComponent } from './home-latest-projects.component';

describe('HomeLatestProjectsComponent', () => {
  let component: HomeLatestProjectsComponent;
  let fixture: ComponentFixture<HomeLatestProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeLatestProjectsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeLatestProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
