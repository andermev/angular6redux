import { Action } from '@ngrx/store';
import { Employee } from '../models/employee';
import { Update } from '@ngrx/entity/src/models';

export enum ActionTypes {
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
  SET_CURRENT_EMPLOYEE_ID = '[Employee] SET CURRENT EMPLOYEE ID',
}

export class LoadEmployeeInformation implements Action {
  readonly type = ActionTypes.LOAD_ALL;
  constructor() { }
}

export class InformationFetchSucceeded implements Action {
  readonly type = ActionTypes.LOAD_ALL_SUCCESS;
  constructor(public payload: Employee[]) { }
}

export class SetCurrentEmployeeId implements Action {
  readonly type = ActionTypes.SET_CURRENT_EMPLOYEE_ID;
  constructor(public payload: number) {}
}

export class Create implements Action {
  readonly type = ActionTypes.CREATE;
  constructor(public payload: Employee) {}
}
export class Patch implements Action {
  readonly type = ActionTypes.PATCH;
  constructor(public payload: Employee) {}
}

export class Delete implements Action {
  readonly type = ActionTypes.DELETE;
  constructor(public payload: number) {}
}

export class LoadAllSuccess implements Action {
  readonly type = ActionTypes.LOAD_ALL_SUCCESS;
  constructor(public payload: Employee[]) {}
}

export class LoadSuccess implements Action {
  readonly type = ActionTypes.LOAD_SUCCESS;
  constructor(public payload: Employee) {}
}

export class CreateSuccess implements Action {
  readonly type = ActionTypes.CREATE_SUCCESS;
  constructor(public payload: Employee) {}
}

export class PatchSuccess implements Action {
  readonly type = ActionTypes.PATCH_SUCCESS;
  constructor(public payload: Update<Employee>) {}
}

export class DeleteSuccess implements Action {
  readonly type = ActionTypes.DELETE_SUCCESS;
  constructor(public payload: number) {}
}

export class Failure implements Action {
  readonly type = ActionTypes.FAILURE;
  constructor (public payload: {concern: 'CREATE' | 'PATCH', error: any}) {}
}

export type EmployeeApiActions =
  | LoadEmployeeInformation
  | InformationFetchSucceeded
  | SetCurrentEmployeeId
  | Create
  | Patch
  | Delete
  | LoadAllSuccess
  | LoadSuccess
  | PatchSuccess
  | CreateSuccess
  | DeleteSuccess
  | Failure;
