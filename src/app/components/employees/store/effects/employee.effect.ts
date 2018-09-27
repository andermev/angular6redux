import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Action, select, Store } from '@ngrx/store';
import { switchMap, startWith, map, catchError } from 'rxjs/operators';
import { generateMockEmployees, Employee } from '../models/employee';

import {
  EmployeeActionTypes,
  LoadAll,
  LoadAllSuccess,
  LoadSuccess,
  CreateSuccess,
  PatchSuccess,
  DeleteSuccess,
  Load,
  Create,
  Patch,
  Failure,
  Delete,
  LoadAllCountries
} from '../actions/employee.action';
import { combineLatest, of, Observable } from 'rxjs';
import { getEmployeesState, getCountriesState } from '..';
import { EmployeesService } from '@app-root/root-store/services/employee.service';
// import { EmployeesService } from '@app-root/root-store/services/employee.service';

@Injectable()
export class EmployeeEffects {

  @Effect() loadEmployeeEffect$ = combineLatest(
    this.store.pipe(select(getEmployeesState)),
  ).pipe(
    ofType(EmployeeActionTypes.LOAD_ALL),
    startWith(new LoadAll()),
    switchMap(() => {
      return of(new LoadAllSuccess(generateMockEmployees()));
    })
  );

  // @Effect()
  // loadAll$: Observable<Action> = this.actions$.pipe(
  //     ofType(EmployeeActionTypes.LOAD_ALL), /* When [Employees] LOAD ALL action is dispatched */
  //     startWith(new LoadAll()),
  //     switchMap(() => generateMockEmployees()), /* Hit the Employees Index endpoint of our REST API */
  //     /* Dispatch LoadAllSuccess action to the central store with id list returned by the backend as id*/
  //     /* 'Employees Reducers' will take care of the rest */
  //     map((employees: Employee[]) => new LoadAllSuccess(employees))
  //   );

  @Effect()
  load$: Observable<Action> = this.actions$.pipe(
    ofType(EmployeeActionTypes.LOAD),
    map( (action: Load ) => action.payload),
    switchMap((id) => of(generateMockEmployees().find(item => Number(item.id) === Number(id)))),
    map((employee: Employee) => new LoadSuccess(employee))
  );

  @Effect()
  create$: Observable<Action> = this.actions$.pipe(
    ofType(EmployeeActionTypes.CREATE),
    map((action: Create) => action.payload),
    switchMap((employee) => of(generateMockEmployees().push(employee))),
    map( (createdEmployee: Employee) => new CreateSuccess(createdEmployee)),
    catchError(err => {
      alert(err['error']['error']['message']);
      return of(new Failure({concern: 'CREATE', error: err}));
    })
  );

  @Effect()
  update$: Observable<Action> = this.actions$.pipe(
    ofType(EmployeeActionTypes.PATCH),
    map((action: Patch) => action.payload),
    switchMap((employee: Employee) => of(generateMockEmployees().push(employee))),
    map((updatedEmployee: Employee) => new PatchSuccess({
      id: updatedEmployee.id,
      changes: updatedEmployee
    })),
    catchError(err => {
      alert(err['error']['error']['message']);
      return of(new Failure({concern: 'PATCH', error: err}));
    })
  );


  @Effect()
  destroy$: Observable<Action> = this.actions$.pipe(
    ofType(EmployeeActionTypes.DELETE),
    map((action: Delete) => action.payload),
    switchMap(
      (id: number) => of(generateMockEmployees().splice(id)).pipe(
        map( () => new DeleteSuccess(id))
      )
    )
  );

  @Effect()
  getCountries$ = this.actions$.pipe(
    select(getCountriesState),
    ofType(EmployeeActionTypes.LOAD_ALL_COUNTRIES),
    switchMap(() => this.employeesService.getCountries()),
    map((action: LoadAllCountries) => action.payload),
    catchError(err => {
      alert(err['error']['error']['message']);
      return of(new Failure({concern: 'PATCH', error: err}));
    })
  );

  constructor(
    private actions$: Actions,
    private employeesService: EmployeesService,
    private store: Store<Employee>
) {}

}
