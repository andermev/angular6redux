import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { EmployeeListComponent } from '../employee-list/employee-list.component';

@NgModule({
  imports: [
    RouterModule
  ],
  declarations: [
    EmployeeListComponent
  ],
  exports: [
    EmployeeListComponent
  ]
})
export class SharedModule { }
