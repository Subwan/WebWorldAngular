import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputCoordComponent } from './input-coord.component';

describe('InputCoordComponent', () => {
  let component: InputCoordComponent;
  let fixture: ComponentFixture<InputCoordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputCoordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputCoordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
