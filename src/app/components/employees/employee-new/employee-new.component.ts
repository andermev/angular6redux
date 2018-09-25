import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {ActionsSubject, Store} from '@ngrx/store';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';

import * as fromRoot from '@app-root-store';
import {EmployeeActionTypes, Create, CreateSuccess} from '@app-employees-store/actions/employee.action';
import {ofType} from '@ngrx/effects';
import { Employee } from '@app-root/employees/store/models/employee';

@Component({
  selector: 'app-employee-new',
  templateUrl: './employee-new.component.html',
  styleUrls: ['./employee-new.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeNewComponent implements OnInit, OnDestroy {

  redirectSub: Subscription;

  constructor(
    private store: Store<fromRoot.State>,
    private router: Router,
    private actionsSubject: ActionsSubject
  ) { }

  ngOnInit() {
    this.redirectSub = this.actionsSubject.asObservable().pipe(
      ofType(EmployeeActionTypes.CREATE_SUCCESS)
    ).subscribe(
      (action: CreateSuccess) => this.router.navigate(['/employees', action.payload.id])
    );

  }

  ngOnDestroy() {
    this.redirectSub.unsubscribe();
  }

  submitted(employee: Employee) {
    this.store.dispatch(new Create(employee));
  }

}
