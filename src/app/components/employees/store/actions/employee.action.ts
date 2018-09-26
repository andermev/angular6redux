import { Action } from '@ngrx/store';
import { Employee } from '../models/employee';
import { Update } from '@ngrx/entity/src/models';

export enum EmployeeActionTypes {
  LOAD_ALL = '[Employee] LOAD ALL',
  LOAD_ALL_SUCCESS = '[Employee] LOAD ALL SUCCESS',
  LOAD = '[Employee] LOAD',
  LOAD_SUCCESS = '[Employee] LOAD SUCCESS',
  CREATE = '[Employee] CREATE',
  CREATE_SUCCESS = '[Employee] CREATE SUCCESS',
  PATCH = '[Employee] PATCH',
  PATCH_SUCCESS = '[Employee] PATCH SUCCESS',
  DELETE = '[Employee] DELETE',
  DELETE_SUCCESS = '[Employee] DELETE SUCCESS',
  FAILURE = '[Employee] FAILURE',
  SET_CURRENT_EMPLOYEE_ID = '[Employee] SET CURRENT EMPLOYEE ID'
}

export class SetCurrentEmployeeId implements Action {
  readonly type = EmployeeActionTypes.SET_CURRENT_EMPLOYEE_ID;
  constructor(public payload: number) {}
}

export class LoadAll implements Action {
  readonly type = EmployeeActionTypes.LOAD_ALL;
  constructor(public payload = null) {}
}

export class Load implements Action {
  readonly type = EmployeeActionTypes.LOAD;
  constructor(public payload: number) {}
}

export class Create implements Action {
  readonly type = EmployeeActionTypes.CREATE;
  constructor(public payload: Employee) {}
}

export class Patch implements Action {
  readonly type = EmployeeActionTypes.PATCH;
  constructor(public payload: Employee) {}
}

export class Delete implements Action {
  readonly type = EmployeeActionTypes.DELETE;
  constructor(public payload: number) {}
}

export class LoadAllSuccess implements Action {
  readonly type = EmployeeActionTypes.LOAD_ALL_SUCCESS;
  constructor(public payload: Employee[]) {}
}

export class LoadSuccess implements Action {
  readonly type = EmployeeActionTypes.LOAD_SUCCESS;
  constructor(public payload: Employee) {}
}

export class CreateSuccess implements Action {
  readonly type = EmployeeActionTypes.CREATE_SUCCESS;
  constructor(public payload: Employee) {}
}

export class PatchSuccess implements Action {
  readonly type = EmployeeActionTypes.PATCH_SUCCESS;
  constructor(public payload: Update<Employee>) {}
}

export class DeleteSuccess implements Action {
  readonly type = EmployeeActionTypes.DELETE_SUCCESS;
  constructor(public payload: number) {}
}

export class Failure implements Action {
  readonly type = EmployeeActionTypes.FAILURE;
  constructor (public payload: {concern: 'CREATE' | 'PATCH', error: any}) {}
}

export type All =
    | SetCurrentEmployeeId
    | LoadAll
    | Load
    | Create
    | Patch
    | Delete
    | LoadAllSuccess
    | LoadSuccess
    | PatchSuccess
    | CreateSuccess
    | DeleteSuccess
    | Failure;
