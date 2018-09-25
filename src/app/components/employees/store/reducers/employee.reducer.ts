
import {EntityState, createEntityAdapter} from '@ngrx/entity';

import {
  EmployeeActionTypes,
  All as AllEmployeesActions
} from '../actions/employee.action';
import { Employee } from '../models/employee';

// This adapter will allow is to manipulate employees (mostly CRUD operations)
export const employeeAdapter = createEntityAdapter<Employee>({
  selectId: (employee: Employee) => employee ? employee.id : null,
  sortComparer: false
});

// -----------------------------------------
// The shape of EntityState
// ------------------------------------------
// interface EntityState<Employee> {
//   ids: string[] | number[];
//   entities: { [id: string]: Employee };
// }
// -----------------------------------------
// -> ids arrays allow us to sort data easily
// -> entities map allows us to access the data quickly without iterating/filtering though an array of objects

export interface State extends EntityState<Employee> {
  currentEmployeeId?: number;
}

export const INIT_STATE: State = employeeAdapter.getInitialState({
  currentEmployeeId: undefined
});



export function reducer(
  state: State = INIT_STATE,
  {type, payload}: AllEmployeesActions
) {

  switch (type) {

    case EmployeeActionTypes.SET_CURRENT_EMPLOYEE_ID : {
      return {
        ...state,
        currentEmployeeId: payload
      };
    }

    case EmployeeActionTypes.LOAD_ALL_SUCCESS : {
      return employeeAdapter.addAll(payload, state);
    }


    case EmployeeActionTypes.LOAD_SUCCESS : {
      return employeeAdapter.addOne(payload, {
        ...state,
        currentEmployeeId: payload.id
      });
    }

    case EmployeeActionTypes.CREATE_SUCCESS : {
      return employeeAdapter.addOne(payload, {
        ...state
      });
    }

    case EmployeeActionTypes.PATCH_SUCCESS : {
      return employeeAdapter.updateOne(payload, state);
    }

    case EmployeeActionTypes.DELETE_SUCCESS : {
      return employeeAdapter.removeOne(payload, state);
    }

    default: return state;

  }
}

export const getCurrentEmployeeId = (state: State) => state.currentEmployeeId;
