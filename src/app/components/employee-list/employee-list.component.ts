import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { getAllEmployeesSelector } from '../store/selector/employee.selector';
import { Store } from '@ngrx/store';
import { Employee } from '../store/models/employee';

@Component({
  templateUrl: './employee-list.component.html',
})

export class EmployeeListComponent  {
  employeeData$: Observable<Employee[]>;

  constructor(public store: Store<Employee>) {
     this.employeeData$ = this.store.select(getAllEmployeesSelector);
  }
}
