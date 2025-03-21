import { Component } from '@angular/core';
import { EmpService } from './emp.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'emsproj';

//   employees: any=[] ;
//   constructor(private empservice:EmpService){ } //dependecy injection
// ngOnInit(){
//   this.employees=this.empservice.getAllEmployees().subscribe(emp=>this.employees=emp);
// }
  // getAllEmployees(){
  //   this.employees=this.empservice.employees;    //assigned to employees array
  //   console.log(this.employees);
  // }
}
