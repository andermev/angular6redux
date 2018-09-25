import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EmployeeComponent } from './employee.component';
import { routing } from './employee.route';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing,
  ],
  declarations: [
    EmployeeComponent,
  ],
})

export class EmployeeModule { }
