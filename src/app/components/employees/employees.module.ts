import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from './employees.component';
import { EmployeesRoutingModule } from './employees-routing.module';
import {StoreModule} from '@ngrx/store';
import * as fromEmployees from './store';
import {EffectsModule} from '@ngrx/effects';
import { EmployeesIndexComponent } from './employees-index/employees-index.component';
import { EmployeeEffects } from './store/effects/employee.effect';
import { SharedModule } from './modules/shared.module';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    EmployeesRoutingModule,
    StoreModule.forFeature(fromEmployees.employeeFeature, fromEmployees.reducers),
    EffectsModule.forFeature([EmployeeEffects])
  ],
  declarations: [
    EmployeesComponent,
    EmployeesIndexComponent
  ]
})
export class EmployeesModule { }
