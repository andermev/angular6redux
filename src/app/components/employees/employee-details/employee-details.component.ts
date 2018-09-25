import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {Store, ActionsSubject, select} from '@ngrx/store';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable, Subscription} from 'rxjs';
import { Employee } from '@app-core/models';


import * as fromEmployees from '@app-employees-store';
import {
  EmployeesActionTypes,
  Delete,
  DeleteSuccess,
  Load,
  SetCurrentEmployeeId
} from '@app-employees-store/actions/employees-actions';
import * as fromRoot from '@app-root-store';
import {filter} from 'rxjs/operators';
import {ofType} from '@ngrx/effects';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeDetailsComponent implements OnInit, OnDestroy {

  employee$: Observable<Employee>;
  redirectSub: Subscription;

  constructor(
      private store: Store<fromRoot.State>,
      private activatedRoute: ActivatedRoute,
      private router: Router,
      private actionsSubject: ActionsSubject
  ) {}

  ngOnInit() {

    this.employee$ = this.store.pipe(
      select(fromEmployees.getCurrentEmployee)
    );

    // If the destroy effect fires, we check if the current id is the one being viewed, and redirect to index
    this.redirectSub = this.actionsSubject.pipe(
        ofType(EmployeesActionTypes.DELETE_SUCCESS),
        filter((action: DeleteSuccess) =>
          action.payload === +this.activatedRoute.snapshot.params['employeeId'])
  ).subscribe(_ => this.router.navigate(['/employees']));

    this.redirectSub = this.actionsSubject.pipe(
      filter(action => action.type === EmployeesActionTypes.DELETE_SUCCESS),
    ).subscribe(
      _ => this.router.navigate(['/employees'])
    );


    this.activatedRoute.params.subscribe(params => {
      // update our id from the backend in case it was modified by another client
      this.store.dispatch(new Load(+params['employeeId']));
    });

  }


  editEmployee(employee: Employee) {

    this.store.dispatch(new SetCurrentEmployeeId(employee.id));

    this.router.navigate(['/employees', employee.id, 'edit']);

  }

  deleteEmployee(employee: Employee) {
    const r = confirm('Are you sure?');
    if (r) {
      this.store.dispatch(new Delete(employee.id));
    }
  }

  ngOnDestroy() {
    this.redirectSub.unsubscribe();
  }


}
