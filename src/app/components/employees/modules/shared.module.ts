import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { EmployeeListComponent } from '../employee-list/employee-list.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
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
