import { Component } from '@angular/core';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-empnamelist',
  templateUrl: './empnamelist.component.html',
  styleUrls: ['./empnamelist.component.css']
})
export class EmpnamelistComponent {
       employees: any=[] ;
        constructor(private empservice:EmpService){ } //dependecy injection
      ngOnInit(){
        this.employees=this.empservice.getAllEmployees().subscribe((data)=>(this.employees=data));
      }
}
