import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Employee } from '../store/models/employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeListComponent implements OnInit {


  @Input() employees: Employee[];
  @Output() edit = new EventEmitter<Employee>();
  @Output() show = new EventEmitter<Employee>();
  @Output() remove = new EventEmitter<Employee>();

  employeesTrackByFn = (index: number, employee: Employee) => employee.id;

  constructor() {}

  ngOnInit() {}


  showDetails(employee: Employee) {
    this.show.emit(employee);
  }

  editEmployee(employee: Employee) {
    this.edit.emit(employee);
  }

  deleteEmployee(employee: Employee) {
    this.remove.emit(employee);
  }

}
