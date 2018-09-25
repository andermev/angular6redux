import { Injectable } from '@angular/core';
import { Effect } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { combineLatest, of } from 'rxjs';
import { filter, switchMap } from 'rxjs/operators';

import { getEmployeeLoaded } from '../Reducer/employee.reducer';
import { InformationFetchSucceeded } from '../Actions/employee.action';
import { Employee, generateMockEmployees } from '../models/employee';

@Injectable()
export class EmployeeAPIEffects {

  constructor(
    private store: Store<Employee>,
  ) { }

  @Effect() loadEmployeeEffect$ = combineLatest(
    this.store.pipe(select(getEmployeeLoaded)),
  ).pipe(
    filter(([loaded]) => !loaded),
    switchMap(() => {
      return of(new InformationFetchSucceeded(generateMockEmployees()));
    }),
  );
}
