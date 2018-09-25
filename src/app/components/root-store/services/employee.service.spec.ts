import { TestBed, inject } from '@angular/core/testing';

import { EmployeesService } from '@app-root/root-store/services/employee.service';
import {HttpClientModule} from '@angular/common/http';


describe('EmployeesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmployeesService],
      imports: [
        HttpClientModule
      ]
    });
  });

  it('should be created', inject([EmployeesService], (service: EmployeesService) => {
    expect(service).toBeTruthy();
  }));
});
