import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeEditComponent } from './employee-edit.component';
import {ReactiveFormsModule} from '@angular/forms';
import {combineReducers, StoreModule} from '@ngrx/store';
import {RouterTestingModule} from '@angular/router/testing';
import * as fromEmployees from '@app-employees-store';
import {ActivatedRoute} from '@angular/router';
import {Actions} from '@ngrx/effects';
import {EmployeesEffects} from '../store/effects/employees-effects';
import {HttpClientModule} from '@angular/common/http';
import {EmployeeFormComponent} from '@app-core/components/employee-form/employee-form.component';
import {EmployeesService} from '@app-core/services/employees.service';
import * as fromRoot from '@app-root-store';


describe('EmployeeEditComponent', () => {
  let component: EmployeeEditComponent;
  let fixture: ComponentFixture<EmployeeEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeEditComponent, EmployeeFormComponent ],
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
    fixture = TestBed.createComponent(EmployeeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
