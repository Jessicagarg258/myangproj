import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
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
  apiUrl:string='http://localhost:8083/demosprboot/api/semployee';
  httpOptions={
    headers:new Headers({
      'Content-Type':'application/json',
    })
  }
  constructor(private http:HttpClient){}
  getAllEmployees():Observable<any>{
    return this.http.get<any>(this.apiUrl+'/listallemp').pipe(retry(1), catchError(this.handleError));  //shows error 
  }
  createEmployee(employee: Employee):Observable<Employee>{
    return this.http.post<Employee>(this.apiUrl+'/addemp',employee).pipe(retry(1), catchError(this.handleError));
  }

  deleteEmployee(id: number): Observable<Employee> {
    return this.http.delete<Employee>(`${this.apiUrl}/deletebyid/${id}`).pipe(retry(1), catchError(this.handleError));
  }

  getEmployeeById(id: number): Observable<Employee> {
    return this.http.get<any>(`${this.apiUrl}/getempbyid/${id}`).pipe(retry(1), catchError(this.handleError));
  }
  updateEmployee(employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(this.apiUrl + '/updateemp', employee);
  }

  handleError(error:any){
    let errorMessage='';
    if(error.error instanceof ErrorEvent){
      errorMessage=error.error.message;
    }
    else{
      errorMessage=`Error Code :${error.status}\n Error Message:${error.message}`;
    }

    window.alert(errorMessage);
    return throwError(errorMessage);

  }

}
