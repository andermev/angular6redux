import { Component, OnInit } from '@angular/core';
import { Employee } from '../store/models/employee';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { Router, ActivatedRoute } from '@angular/router';

import * as fromEmployees from '../store/index';
import { Delete, SetCurrentEmployeeId } from '../store/actions/employee.action';

@Component({
  selector: 'app-employees-index',
  templateUrl: './employees-index.component.html',
  styleUrls: ['./employees-index.component.sass']
})
export class EmployeesIndexComponent implements OnInit {

  employeesData$: Observable<Employee[]>;

  constructor(public store: Store<fromEmployees.State>, private router: Router, private actR: ActivatedRoute) { }

  ngOnInit() {
    // getAllEmployees selector from the main store allows us to monitor changes only on id list from the main state
    // without monitoring the rest of the state
    this.employeesData$ = this.store.pipe(
      select(fromEmployees.getAllEmployees)
    );
  }

  editEmployee(employee: Employee) {
    this.store.dispatch(new SetCurrentEmployeeId(Number(employee.id)));
    this.router.navigate(['/employees', employee.id, 'edit']);
  }

  showEmployee(employee: Employee) {
    this.store.dispatch(new SetCurrentEmployeeId(Number(employee.id)));
    this.router.navigate(['/employees', employee.id]);
  }

  deleteEmployee(employee: Employee) {
    const r = confirm('Are you sure?');
    if (r) {
      this.store.dispatch(new Delete(Number(employee.id)));
    }
  }

}
