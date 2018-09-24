import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { switchMap, startWith, map } from 'rxjs/operators';
import { generateMockEmployees, Employee } from '../models/employee';

import {
  EmployeeActionTypes,
  LoadAll,
  LoadAllSuccess
} from '../actions/employee.action';
import { Observable } from 'rxjs';

@Injectable()
export class EmployeeAPIEffects {

  // constructor(
  //   private store: Store<Employee>,
  // ) { }

  // @Effect() loadEmployeeEffect$ = combineLatest(
  //   this.store.pipe(select(getEmployeeLoaded)),
  // ).pipe(
  //   filter(([loaded]) => !loaded),
  //   switchMap(() => {
  //     return of(new InformationFetchSucceeded(generateMockEmployees()));
  //   }),
  // );

  @Effect()
  loadAll$: Observable<Action> = this.actions$.pipe(
      ofType(EmployeeActionTypes.LOAD_ALL), /* When [Contacts] LOAD ALL action is dispatched */
      startWith(new LoadAll()),
      switchMap(() => generateMockEmployees()), /* Hit the Contacts Index endpoint of our REST API */
      /* Dispatch LoadAllSuccess action to the central store with id list returned by the backend as id*/
      /* 'Contacts Reducers' will take care of the rest */
      map((employees: Employee[]) => new LoadAllSuccess(employees))
    );

    constructor(
      private actions$: Actions
  ) {}


}
