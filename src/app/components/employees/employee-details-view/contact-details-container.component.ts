import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Employee } from '@app-core/models';


@Component({
  selector: 'app-employee-details-container',
  templateUrl: './employee-details-container.component.html',
  styleUrls: ['./employee-details-container.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeDetailsContainerComponent implements OnInit {

  @Input() employee: Employee;
  @Output() edit = new EventEmitter<Employee>();
  @Output() remove = new EventEmitter<Employee>();

  constructor() { }

  ngOnInit() {

  }

}
