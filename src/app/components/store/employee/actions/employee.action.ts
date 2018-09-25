import { Action } from '@ngrx/store';
import { Employee } from '../models/employee';

export enum ActionTypes {
  loadEmployeeInformation = 'EMPLOYEE_INFORMATION/LOAD',
  informationFetchSucceeded = 'INFORMATION_FETCH/SUCCEEDED',
}

export class LoadEmployeeInformation implements Action {
  readonly type = ActionTypes.loadEmployeeInformation;
  constructor() { }
}

export class InformationFetchSucceeded implements Action {
  readonly type = ActionTypes.informationFetchSucceeded;
  constructor(public payload: Employee[]) { }
}

export type EmployeeApiActions = LoadEmployeeInformation | InformationFetchSucceeded;
