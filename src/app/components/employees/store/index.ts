import * as fromEmployees from './reducers/employee.reducer';
import * as fromCountries from './reducers/util.reducer';
import {createFeatureSelector, createSelector} from '@ngrx/store';

export interface EmployeesState {
  employees: fromEmployees.State;
}

export interface CountriesState {
  countries: fromCountries.State;
}

export interface State {
  employees: EmployeesState;
  countries: CountriesState;
}

export const reducers = {
  employees: fromEmployees.reducer,
  countries: fromCountries.reducer
};

export const employeeFeature = 'employee';
export const countryFeature = 'country';

export const getEmployeesRootState = createFeatureSelector<EmployeesState>(employeeFeature);
export const getCountriesRootState = createFeatureSelector<CountriesState>(countryFeature);

export const getEmployeesState = createSelector(
    getEmployeesRootState,
    state => state.employees
);

export const getCountriesState = createSelector(
  getCountriesRootState,
  state => state.countries
);

export const getSelectedEmployeeId = createSelector(
  getEmployeesState,
  fromEmployees.getCurrentEmployeeId
);

export const {
  selectAll: getAllEmployees,
  selectEntities: getEmployeeEntities
} = fromEmployees.employeeAdapter.getSelectors(getEmployeesState);

export const {
  selectAll: getAllCountries
} = fromCountries.countryAdapter.getSelectors(getCountriesState);

export const getCurrentEmployee = createSelector(
  getEmployeeEntities,
  getSelectedEmployeeId,
  (entities, id) => id && entities[id]
);
