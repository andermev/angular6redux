import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import { Employee } from '@app-root/employees/store/models/employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeesService {

  constructor(private http: HttpClient ) { }

  getCountries(): Observable<any> {
    return this.http
        .get(`${environment.apiCountries.baseUrl}`);

  }

}
