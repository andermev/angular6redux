import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesComponent } from './employees.component';
import { EmployeesIndexComponent } from './employees-index/employees-index.component';
import { TitleResolver } from '../root-store/resolvers/title.resolver';
import { EmployeeDetailsComponent } from '@app-root/employees/employee-details/employee-details.component';
import { EmployeeNewComponent } from '@app-root/employees/employee-new/employee-new.component';
import { EmployeeEditComponent } from '@app-root/employees/employee-edit/employee-edit.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeesComponent,
    children: [
      {
        path: '',
        component: EmployeesIndexComponent,
        data: {title: 'Employee index'},
        pathMatch: 'full',
        resolve: {title: TitleResolver}
      },
      {
        path: 'new',
        component: EmployeeNewComponent,
        data: {title: 'New employee'},
        pathMatch: 'full',
        resolve: {title: TitleResolver}
      },
      {
        path: ':employeeId',
        component: EmployeeDetailsComponent,
        data: {title: 'Employee details'},
        pathMatch: 'full',
        resolve: {title: TitleResolver}
      },
      {
        path: ':employeeId/edit',
        component: EmployeeEditComponent,
        data: {title: 'Edit employee'},
        pathMatch: 'full',
        resolve: {title: TitleResolver}
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
