import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDetailsComponent } from './employee-details.component';

import {combineReducers, StoreModule} from '@ngrx/store';
import {RouterTestingModule} from '@angular/router/testing';
import * as fromEmployees from '@app-employees-store';
import {EmployeesEffects} from '../store/effects/employees-effects';
import {Actions} from '@ngrx/effects';
import * as fromRoot from '@app-root-store';

import {HttpClientModule} from '@angular/common/http';
import {EmployeeDetailsContainerComponent} from '@app-core/components/employee-details/employee-details-container.component';
import {EmployeesService} from '@app-core/services/employees.service';


describe('EmployeeDetailsComponent', () => {
  let component: EmployeeDetailsComponent;
  let fixture: ComponentFixture<EmployeeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeDetailsComponent, EmployeeDetailsContainerComponent],
      imports: [
        RouterTestingModule,
        HttpClientModule,
        StoreModule.forRoot({
            ...fromRoot.reducers,
            'employees': combineReducers(fromEmployees.reducers)
        })
      ],
      providers: [
        EmployeesEffects,
        Actions,
        EmployeesService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
