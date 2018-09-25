import { RouterModule, Routes } from '@angular/router';

import { EmployeeComponent } from './employee.component';

export const routes: Routes = [
  {
    path: '',
    component: EmployeeComponent,
  },
];

export const routing = RouterModule.forChild(routes);
