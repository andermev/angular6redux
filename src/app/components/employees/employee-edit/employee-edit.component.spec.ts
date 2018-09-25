import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeEditComponent } from './employee-edit.component';
import {ReactiveFormsModule} from '@angular/forms';
import {combineReducers, StoreModule} from '@ngrx/store';
import {RouterTestingModule} from '@angular/router/testing';
import * as fromEmployees from '@app-employees-store';
import {Actions} from '@ngrx/effects';
import {HttpClientModule} from '@angular/common/http';
import {EmployeeFormComponent} from '@app-root/employees/employee-form/employee-form.component';
import {EmployeesService} from '@app-root/root-store/services/employee.service';
import * as fromRoot from '@app-root-store';
import {EmployeeEffects} from '@app-employees-store/effects/employee.effect';


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
        EmployeeEffects,
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
