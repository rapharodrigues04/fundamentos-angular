import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWayDateBindComponent } from './two-way-date-bind.component';

describe('TwoWayDateBindComponent', () => {
  let component: TwoWayDateBindComponent;
  let fixture: ComponentFixture<TwoWayDateBindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoWayDateBindComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoWayDateBindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
