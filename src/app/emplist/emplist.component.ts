import { Component } from '@angular/core';
import { EmpService } from '../emp.service';
import { Employee } from 'src/Employees';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.css']
})
export class EmplistComponent {
  employees: any=[] ;
  // constructor(private empservice:EmpService){ } //dependecy injection


  selectedId: number = 0;
  constructor(private empservice: EmpService, private router: Router) {}

  onDelete(emp: Employee) {
    this.selectedId = emp.eid;
    console.log(emp);
    this.empservice
      .deleteEmployee(this.selectedId)
      .subscribe((data: {}) => this.router.navigate(['/emplist']));
  }
ngOnInit(){
  this.employees=this.empservice.getAllEmployees().subscribe((emp)=>(this.employees=emp));
}
  // getAllEmployees(){
  //   this.employees=this.empservice.employees;    //assigned to employees array
  //   console.log(this.employees);
  // }


}
