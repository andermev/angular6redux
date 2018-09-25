import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import { Employee } from '@app-core/models';
import {Store, ActionsSubject, select} from '@ngrx/store';

import {State} from '../store';
import {ActivatedRoute, Router} from '@angular/router';

import * as fromEmployee from '@app-employees-store';
import {EmployeesActionTypes, Load, Patch, PatchSuccess} from '@app-employees-store/actions/employees-actions';
import {filter} from 'rxjs/operators';
import {ofType} from '@ngrx/effects';


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
        ofType(EmployeesActionTypes.PATCH_SUCCESS),
        filter((action: PatchSuccess) => action.payload.id === +this.activatedRoute.snapshot.params['employeeId'])
    ).subscribe(
      (action: PatchSuccess) => this.router.navigate(['/employees', action.payload.id])
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
