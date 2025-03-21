import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from 'src/Employees';

@Injectable({
  providedIn: 'root'
})
export class EmpService {

  employees=[
    // {
    //   eid:121,
    //   ename:"gopika",
    //   email:"gopika@gmail.com",
    //   password:"pass",
    //   gender:"female",
    // },
    // {
    //   eid:120,
    //   ename:"jessica",
    //   email:"jesisca@gmail.com",
    //   password:"pass",
    //   gender:"female",
    // }
  ];
  apiUrl:string='http://localhost:8083/demosprboot/semployee';
  httpOptions={
    headers:new Headers({
      'Content-Type':'application/json',
    })
  }
  constructor(private http:HttpClient){}
  getAllEmployees():Observable<any>{
    return this.http.get<any>(this.apiUrl+'/listallemp');
  }
  createEmployee(employee: Employee):Observable<Employee>{
    return this.http.post<Employee>(this.apiUrl+'/addemp',employee);
  }

  deleteEmployee(id: number): Observable<Employee> {
    return this.http.delete<Employee>(`${this.apiUrl}/deletebyid/${id}`);
  }

  getEmployeeById(id: number): Observable<Employee> {
    return this.http.get<any>(`${this.apiUrl}/getempbyid/${id}`);
  }
  updateEmployee(employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(this.apiUrl + '/updateemp', employee);
  }

}
