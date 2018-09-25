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
import { Observable, combineLatest, of } from 'rxjs';
import { getEmployeesState } from '..';

@Injectable()
export class EmployeeEffects {

  // constructor(
  //   private store: Store<Employee>,
  // ) { }

  // @Effect() loadEmployeeEffect$ = combineLatest(
  //   this.store.pipe(select(getEmployeesState)),
  // ).pipe(
  //   filter(([loaded]) => !loaded),
  //   switchMap(() => {
  //     return of(new LoadAllSuccess(generateMockEmployees()));
  //   }),
  // );

  @Effect()
  loadEmployeeEffect$: Observable<Action> = this.actions$.pipe(
      ofType(EmployeeActionTypes.LOAD_ALL_SUCCESS), /* When [Employees] LOAD ALL action is dispatched */
      startWith(new LoadAll()),
      switchMap(() => generateMockEmployees()), /* Hit the Employee mock items */
      /* Dispatch LoadAllSuccess action to the central store with id list returned by the backend as id*/
      /* 'Employee Reducers' will take care of the mock */
      map((employees: Employee[]) => new LoadAllSuccess(employees))
    );

    constructor(
      private actions$: Actions
  ) {}


}
