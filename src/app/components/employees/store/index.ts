import * as fromEmployees from './reducers/employee.reducer';
import {createFeatureSelector, createSelector} from '@ngrx/store';

export interface EmployeesState {
  employees: fromEmployees.State;
}

export interface State {
  employees: EmployeesState;
}

export const reducers = {
  employees: fromEmployees.reducer
};

export const employeeFeature = 'employee';

export const getEmployeesRootState = createFeatureSelector<EmployeesState>(employeeFeature);

export const getEmployeesState = createSelector(
    getEmployeesRootState,
    state => state.employees
);

export const getSelectedEmployeeId = createSelector(
  getEmployeesState,
  fromEmployees.getCurrentEmployeeId
);

export const {
  selectAll: getAllEmployees,
  selectEntities: getEmployeeEntities
} = fromEmployees.employeeAdapter.getSelectors(getEmployeesState);

export const getCurrentEmployee = createSelector(
  getEmployeeEntities,
  getSelectedEmployeeId,
  (entities, id) => id && entities[id]
);
