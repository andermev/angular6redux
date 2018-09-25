import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Employee, Area } from '@app-root/employees/store/models/employee';


@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeFormComponent implements OnInit, OnChanges {

  @Input() employee: Employee = {
    id: '',
    name: '',
    jobTitle: '',
    age: 0,
    username: '',
    hireDate: new Date(),
    dateOfBirth: new Date(),
    country: '',
    status: true,
    area: Area.Services,
    tipRate: 0
  };

  @Output() save = new EventEmitter<Employee>();

  form: FormGroup;

  constructor(public formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      'id': [this.employee.id, Validators.required],
      'name': [this.employee.name, Validators.required],
      'jobTitle': [this.employee.jobTitle, Validators.required],
      'age': [this.employee.age],
      'username': [this.employee.username],
      'hireDate': [this.employee.hireDate],
      'dateOfBirth': [this.employee.dateOfBirth],
      'country': [this.employee.country],
      'status': [this.employee.status],
      'area': [this.employee.area],
      'tipRate': [this.employee.tipRate]
    });
  }

  ngOnInit() {

  }

  ngOnChanges() {
    if (this.employee) {
      this.form.patchValue({...this.employee});
    }
  }

  submit() {
    if (this.form.valid) {
      this.save.emit(this.form.value);
    }

  }

}
