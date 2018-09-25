import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeNewComponent } from './employee-new.component';
import {ReactiveFormsModule} from '@angular/forms';
import {combineReducers, StoreModule} from '@ngrx/store';
import * as fromEmployees from '@app-employees-store';
import {RouterTestingModule} from '@angular/router/testing';
import {Actions} from '@ngrx/effects';
import {EmployeesEffects} from '../store/effects/employees-effects';
import {HttpClientModule} from '@angular/common/http';
import {EmployeeFormComponent} from '@app-core/components/employee-form/employee-form.component';
import {EmployeesService} from '@app-core/services/employees.service';
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
        EmployeesEffects,
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
