import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Area } from '@app-root/employees/store/models/employee';

@Component({
  selector: 'app-jobtitle',
  templateUrl: './jobtitle.component.html',
  styleUrls: ['./jobtitle.component.sass']
})
export class JobtitleComponent {

  @Input() typeArea: string;
  @Input() values: DropdownValue[];

  @Output() select: EventEmitter<any>;

  services = [{
    'value': 'Manager',
    'label': 'Manager'
  }, {
    'value': 'Host',
    'label': 'Host'
  }, {
    'value': 'Tuttofare',
    'label': 'Tuttofare'
  }, {
    'value': 'Waitress',
    'label': 'Waitress'
  }, {
    'value': 'Dinning room manager',
    'label': 'Dinning room manager'
  }];
  kitchen = [{
    'value': 'Chef',
    'label': 'Chef'
  }, {
    'value': 'Sous Chef',
    'label': 'Sous Chef'
  }, {
    'value': 'Dishwasher',
    'label': 'Dishwasher'
  }, {
    'value': 'Cook',
    'label': 'Cook'
  }];

  constructor() {
    this.select = new EventEmitter();
    if (this.typeArea === Area.Services) {
      this.values = this.services;
    } else {
      this.values = this.kitchen;
    }
  }

  selectItem(value) {
    this.select.emit(value);
  }

}

export class DropdownValue {
  value: string;
  label: string;

  constructor(value: string, label: string) {
    this.value = value;
    this.label = label;
  }
}
