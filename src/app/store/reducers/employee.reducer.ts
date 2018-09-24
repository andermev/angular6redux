import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { ActionReducerMap } from '@ngrx/store';
import * as EmployeeAction from '../actions/employee.action';
import { Employee } from '../models/employee';

const employeeAdapter = createEntityAdapter<Employee>();

export interface AllEmployeeState {
  employee: EmployeeState;
}

export const EmployeeReducerModule: ActionReducerMap<AllEmployeeState> = {
  employee: employeeReducer
};

export interface EmployeeState extends EntityState<Employee> {
  loading: boolean;
  loaded: boolean;
  error: string;
}

export const EMPLOYEE_INITIAL_STATE: EmployeeState = employeeAdapter.getInitialState({
  loading: false,
  loaded: false,
  error: '',
});

export function employeeReducer(state = EMPLOYEE_INITIAL_STATE,
  action: EmployeeAction.EmployeeApiActions): EmployeeState {
  switch (action.type) {
    case EmployeeAction.ActionTypes.LOAD_EMPLOYEE_INFORMATION: {
      return {
        ...state,
        loading: true,
        loaded: false,
      };
    }
    case EmployeeAction.ActionTypes.INFORMATION_FETCH_SUCCEEDED: {
      return employeeAdapter.addAll(action.payload, {
        ...state,
        loaded: true,
        loading: false,
        error: '',
      });
    }
  }
  return state;
}

export const {
  selectEntities: selectEmployeeEntities,
  selectAll: selectAllEmployee,
  selectIds: selectArtifactsIds,

} = employeeAdapter.getSelectors();

export const getEmployeeLoaded = (state: EmployeeState) => state.loaded;
