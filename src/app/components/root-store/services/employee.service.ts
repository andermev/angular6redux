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


  index(): Observable<Employee[]> {
    return this.http
        .get<Employee[]>(`${environment.appApi.baseUrl}/employees`);

  }

  show(conactId: number): Observable<Employee> {
    return this.http
        .get<Employee>(`${environment.appApi.baseUrl}/employees/${conactId}`);

  }

  create(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(`${environment.appApi.baseUrl}/employees`, employee);
  }

  update(employee: Employee): Observable<Employee> {
    return this.http.patch<Employee>(`${environment.appApi.baseUrl}/employees/${employee.id}`, employee);
  }


  destroy(id: number): Observable<Employee> {
    return this.http.delete<Employee>(`${environment.appApi.baseUrl}/employees/${id}`);
  }

}
