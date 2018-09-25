import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeNewComponent } from './employee-new.component';
import {ReactiveFormsModule} from '@angular/forms';
import {combineReducers, StoreModule} from '@ngrx/store';
import * as fromEmployees from '@app-employees-store';
import {RouterTestingModule} from '@angular/router/testing';
import {Actions} from '@ngrx/effects';
import {EmployeeEffects} from '@app-employees-store/effects/employee.effect';
import {HttpClientModule} from '@angular/common/http';
import {EmployeeFormComponent} from '@app-root/employees/employee-form/employee-form.component';
import {EmployeesService} from '@app-root/root-store/services/employee.service';
import * as fromRoot from '@app-root-store';


describe('EmployeeNewComponent', () => {
  let component: EmployeeNewComponent;
  let fixture: ComponentFixture<EmployeeNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeNewComponent, EmployeeFormComponent ],
      imports: [
        ReactiveFormsModule,
        StoreModule.forRoot({
          ...fromRoot.reducers,
          'employees': combineReducers(fromEmployees.reducers)
        }),
        RouterTestingModule,
        HttpClientModule
      ],
      providers: [
        EmployeeEffects,
        Actions,
        EmployeesService,
      ]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
