import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { EmployeeReducerModule } from './Reducer/employee.reducer';
import { employeeFeature } from './Selector/employee.selector';
import { EmployeeAPIEffects } from './Effects/employee.effect';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(employeeFeature, EmployeeReducerModule),
    EffectsModule.forFeature([EmployeeAPIEffects]),
  ],
})

export class EmployeeStoreModule { }
