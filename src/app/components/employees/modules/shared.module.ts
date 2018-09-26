import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { EmployeeListComponent } from '../employee-list/employee-list.component';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { FooterComponent } from '../footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeeFormComponent } from '@app-root/employees/employee-form/employee-form.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  declarations: [
    EmployeeListComponent,
    ToolbarComponent,
    FooterComponent,
    EmployeeFormComponent
  ],
  exports: [
    EmployeeListComponent,
    ToolbarComponent,
    FooterComponent,
    EmployeeFormComponent
  ]
})
export class SharedModule { }
