import { ComponentFixture, TestBed } from '@angular/core/testing';

import { featureComponent } from './feature.component';

describe('featureComponent', () => {
  let component: featureComponent;
  let fixture: ComponentFixture<featureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ featureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(featureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
