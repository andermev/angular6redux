
import {EntityState, createEntityAdapter} from '@ngrx/entity';

import {
  EmployeeActionTypes,
  All as AllEmployeesActions
} from '@app-root/employees/store/actions/employee.action';
import { Employee } from '@app-root/employees/store/models/employee';

export const countryAdapter = createEntityAdapter<any>();

export interface State extends EntityState<any> {
}

export const INIT_STATE: State = countryAdapter.getInitialState({});

export function reducer(
  state: State = INIT_STATE,
  {type, payload}: AllEmployeesActions
) {

  switch (type) {

    case EmployeeActionTypes.LOAD_ALL_COUNTRIES : {
      return {
        ...state,
        currentEmployeeId: payload
      };
    }

    default: return state;

  }
}
