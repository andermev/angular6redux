import { createSelector, createFeatureSelector } from '@ngrx/store';

import * as fromFeature from '../reducer/employee.reducer';
import { AllEmployeeState } from '../reducer/employee.reducer';

export const employeeFeature = 'employee';

export const getAllEmployeeInfo = createFeatureSelector<AllEmployeeState>(employeeFeature);

export const getEmployeeState = createSelector(getAllEmployeeInfo, (state: AllEmployeeState) => {
  return state.employee;
});

// get all Employee entities
export const getAllEmployeeEntitiesSelector = createSelector(
  getEmployeeState, fromFeature.selectEmployeeEntities);

// get all Employee location
export const getAllEmployeesSelector = createSelector(getEmployeeState,
  fromFeature.selectAllEmployee);

  // get Artifact loaded
export const getEmployeeLoadedSelector = createSelector(getEmployeeState,
  fromFeature.getEmployeeLoaded);
