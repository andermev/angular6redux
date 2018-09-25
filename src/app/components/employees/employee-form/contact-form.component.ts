import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import { Employee } from '@app-core/models';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeFormComponent implements OnInit, OnChanges {

  @Input() employee: Employee = {
    id: undefined,
    name: '',
    email: '',
    phone: ''
  };

  @Output() save = new EventEmitter<Employee>();

  form: FormGroup;

  constructor(public formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      'id': [this.employee.id],
      'name': [this.employee.name, Validators.required],
      'email': [this.employee.email, Validators.required],
      'phone': [this.employee.phone]
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
