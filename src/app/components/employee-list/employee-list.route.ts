import { RouterModule, Routes } from '@angular/router';

import { EmployeeListComponent } from './employee-list.component';

export const routes: Routes = [
  {
    path: '',
    component: EmployeeListComponent,
  },
];

export const routing = RouterModule.forChild(routes);
