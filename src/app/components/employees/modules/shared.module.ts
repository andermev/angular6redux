import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { EmployeeListComponent } from '../employee-list/employee-list.component';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { FooterComponent } from '../footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeeDetailsContainerComponent } from '@app-root/employees/employee-details-view/employee-details-container.component';
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
    EmployeeDetailsContainerComponent,
    EmployeeFormComponent
  ],
  exports: [
    EmployeeListComponent,
    ToolbarComponent,
    FooterComponent,
    EmployeeDetailsContainerComponent,
    EmployeeFormComponent
  ]
})
export class SharedModule { }
