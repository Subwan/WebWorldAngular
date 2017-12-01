import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionCustomerComponent } from './section-customer.component';

describe('SectionCustomerComponent', () => {
  let component: SectionCustomerComponent;
  let fixture: ComponentFixture<SectionCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
