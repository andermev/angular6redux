import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { EmployeeListComponent } from '../employee-list/employee-list.component';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { FooterComponent } from '../footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeeFormComponent } from '@app-root/employees/employee-form/employee-form.component';
import { JobtitleComponent } from '@app-root/employees/jobtitle/jobtitle.component';

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
    EmployeeFormComponent,
    JobtitleComponent
  ],
  exports: [
    EmployeeListComponent,
    ToolbarComponent,
    FooterComponent,
    EmployeeFormComponent,
    JobtitleComponent
  ]
})
export class SharedModule { }
