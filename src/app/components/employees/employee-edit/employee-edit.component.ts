import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {Store, ActionsSubject, select} from '@ngrx/store';

import {State} from '../store';
import {ActivatedRoute, Router} from '@angular/router';

import * as fromEmployees from '@app-root/employees/store';
import {EmployeeActionTypes, Load, Patch, PatchSuccess} from '@app-employees-store/actions/employee.action';
import {filter} from 'rxjs/operators';
import {ofType} from '@ngrx/effects';
import { Employee } from '@app-root/employees/store/models/employee';


@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeEditComponent implements OnInit, OnDestroy {

  employee$: Observable<Employee>;
  redirectSub: Subscription;

  constructor(
      public store: Store<State>,
      private activatedRoute: ActivatedRoute,
      private router: Router,
      private actionsSubject: ActionsSubject

  ) { }

  ngOnInit() {

    this.employee$ = this.store.pipe(
      select(fromEmployees.getCurrentEmployee)
    );

    // If the update effect fires, we check if the current id is the one being updated, and redirect to its details
    this.redirectSub = this.actionsSubject.pipe(
        ofType(EmployeeActionTypes.PATCH_SUCCESS),
        filter((action: PatchSuccess) => action.payload.id === +this.activatedRoute.snapshot.params['employeeId'])
    ).subscribe(
      (action: PatchSuccess) => this.router.navigate(['/employees'])
    );

    this.activatedRoute.params.subscribe(params => {
      // update our id from the backend in case it was modified by another client
      this.store.dispatch(new Load(+params['employeeId']));
    });

  }

  ngOnDestroy() {
    this.redirectSub.unsubscribe();
  }

  submitted(employee: Employee) {
    this.store.dispatch(new Patch(employee));
  }

}
