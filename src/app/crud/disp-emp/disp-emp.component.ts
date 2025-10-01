import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-disp-emp',
  templateUrl: './disp-emp.component.html',
  styleUrls: ['./disp-emp.component.scss']
})
export class DispEmpComponent implements OnInit {

  allStudents: any[] = [];

  constructor(
    private crudService: CrudService
  ) { }
  
  ngOnInit(): void { 
    this.getAllStudents();
   }

  getAllStudents() { 
    this.crudService.getStudents().subscribe({
      next: (res) => { 
        console.log("res  : ", res);
        this.allStudents = res
      },
      error: (err) => { 
        console.log(err);
      },
      complete: () => { 
        console.log("completed");
      }
    })
  }

  deleteStudents(id: string) { 
    this.crudService.deleteStudents(id).subscribe({
      next: (res) => { 
        console.log("res  : ", res);
        this.getAllStudents();
      },
      error: (err) => { 
        console.log(err);
      },
      complete: () => { 
        console.log("completed");
      }
    })
  }

  isNgClass: boolean = true;


}
