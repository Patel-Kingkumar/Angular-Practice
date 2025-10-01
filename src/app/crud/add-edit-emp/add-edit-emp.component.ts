import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-add-edit-emp',
  templateUrl: './add-edit-emp.component.html',
  styleUrls: ['./add-edit-emp.component.scss']
})
export class AddEditEmpComponent implements OnInit {

  studentForm: FormGroup | any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private crudService: CrudService
  ) { 
    this.initStudentForm();
  }

  ngOnInit(): void { 
    var sId = this.route.snapshot.paramMap.get('id');
    this.getById(sId);
   }

   getById(studentId: any) {
    this.crudService.getStudentsById(studentId).subscribe({
      next: (res) => {
        console.log("res  : ", res);
        this.fillStudentData(res);
      },
      error: (err) => {},
      complete: () => {}
    })
   }

   fillStudentData(data: any) {
    this.studentForm.patchValue({
      firstName: data.firstName,
      secondNmae: data.secondNmae,
      lastName: data.lastName,
      education: data.education,
      job: data.job 
    });
   }

  initStudentForm() {
    this.studentForm = this.fb.group({
      firstName: [''],
      secondNmae: [''],
      lastName: [''],
      education: [''],
      job: ['']
    });
  }

 submitForm() {
  console.log("id  : ", this.route.snapshot.paramMap.get('id'));
  var studentId = this.route.snapshot.paramMap.get('id');

  if(studentId != null) { 
    this.crudService.editStudents(studentId, this.studentForm.value).subscribe({
      next: (res) => {
        console.log("res  : ", res);
      },
      error: (err) => {},
      complete: () => {}  
    })
  } else {

    
    this.crudService.addStudents(this.studentForm.value).subscribe({
      next: (res) => {
        console.log("res  : ", res);
      },
      error: (err) => {},
      complete: () => {}
    })
    // this.router.navigate(['/display-student']);
  }
    console.log("form  : ", this.studentForm.value);
  }

}
