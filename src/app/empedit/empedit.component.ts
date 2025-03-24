import { Component } from '@angular/core';
import { EmpService } from '../emp.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-empedit',
  templateUrl: './empedit.component.html',
  styleUrls: ['./empedit.component.css']
})
export class EmpeditComponent {
         employee:any={
           ename:'',
           email:'',
           password:'',
           gender:'',
           isMarried:false,
         }
       submitted=false;
       constructor(private empService:EmpService,public router: Router,private aroute: ActivatedRoute){}
       public eid: any = this.aroute.snapshot.params['eid'];   

       ngOnInit() {			
         this.empService
           .getEmployeeById(this.eid)
           .subscribe((emp) => (this.employee = emp));
         console.log(this.employee);
       }
         updateEmployee(){
           console.log(this.employee);
           this.empService.createEmployee(this.employee).subscribe((data:{})=>this.router.navigate(['/emplist']));
         }
       
         onSubmit(){
           this.submitted=true;
           alert("Employee data is updated..");
         }
}
