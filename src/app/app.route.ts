import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadChildren: 'src/app/components/employee-list/employee-list.module#EmployeeListModule' },
  { path: 'employee', loadChildren: 'src/app/components/employee/employee.module#EmployeeModule' },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
