import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesComponent } from './employees.component';
import { EmployeesIndexComponent } from './employees-index/employees-index.component';
import { TitleResolver } from '../../resolvers/title.resolver';

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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
