import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDetailsContainerComponent } from './employee-details-container.component';

describe('EmployeeDetailsComponent', () => {
  let component: EmployeeDetailsContainerComponent;
  let fixture: ComponentFixture<EmployeeDetailsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeDetailsContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeDetailsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
