import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EmployeeListComponent } from './employee-list.component';
import { routing } from './employee-list.route';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing,
  ],
  declarations: [
    EmployeeListComponent,
  ],
})

export class EmployeeListModule { }
