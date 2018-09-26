import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, AfterContentChecked, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Employee, Area } from '@app-root/employees/store/models/employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeFormComponent implements OnChanges, OnInit, AfterContentChecked {

  @Input() employee: Employee = {
    id: '',
    name: '',
    jobTitle: '',
    age: 0,
    username: '',
    hireDate: undefined,
    dateOfBirth: undefined,
    country: '',
    status: true,
    area: Area.Services,
    tipRate: 0
  };

  @Output() save = new EventEmitter<Employee>();
  @Input() disabledForm;

  form: FormGroup;
  isEditScreen = false;
  formGroupConfiguration = {};

  constructor(public formBuilder: FormBuilder, private router: Router) {
    this.isEditScreen = router.url.includes('/edit');

    this.formGroupConfiguration = {
      'id': [this.employee.id],
      'name': [this.employee.name, Validators.required],
      'jobTitle': [this.employee.jobTitle, Validators.required],
      'age': [this.employee.age, Validators.required],
      'username': [this.employee.username, Validators.required],
      'hireDate': [this.employee.hireDate, Validators.required],
      'dateOfBirth': [this.employee.dateOfBirth, Validators.required],
      'country': [this.employee.country, Validators.required],
      'status': [this.employee.status, Validators.required],
      'area': [this.employee.area, Validators.required],
      'tipRate': [this.employee.tipRate, Validators.required]
    };

    /**
     * Not valid the name field on the form when the edit option is choosen by user.
     */
    if (this.isEditScreen) {
      delete this.formGroupConfiguration['name'];
    }

    this.form = this.formBuilder.group(this.formGroupConfiguration);
  }

  ngOnInit(): void {
    this.form.controls.hireDate.setValue(this.employee.hireDate.toISOString().substring(0, 10));
    this.form.controls.dateOfBirth.setValue(this.employee.dateOfBirth.toISOString().substring(0, 10));
  }

  ngAfterContentChecked() {
    if (this.disabledForm) {
      this.form.disable();
    } else {
      this.form.enable();
    }
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
