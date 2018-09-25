import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Action, select, Store } from '@ngrx/store';
import { switchMap, startWith, map, filter } from 'rxjs/operators';
import { generateMockEmployees, Employee } from '../models/employee';

import {
  EmployeeActionTypes,
  LoadAll,
  LoadAllSuccess
} from '../actions/employee.action';
import { combineLatest, of } from 'rxjs';
import { getEmployeesState } from '..';

@Injectable()
export class EmployeeEffects {

  constructor(
    private store: Store<Employee>
  ) { }

  @Effect() loadEmployeeEffect$ = combineLatest(
    this.store.pipe(select(getEmployeesState)),
  ).pipe(
    ofType(EmployeeActionTypes.LOAD_ALL),
    startWith(new LoadAll()),
    switchMap(() => {
      return of(new LoadAllSuccess(generateMockEmployees()));
    }),
  );

}
