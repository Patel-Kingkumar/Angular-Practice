import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-test-one',
  templateUrl: './test-one.component.html',
  styleUrls: ['./test-one.component.scss'],
})
export class TestOneComponent implements OnInit {
  studentForm: FormGroup | any;

  constructor(private fb: FormBuilder, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.initForm();
    this.studentForm.get('cricket')?.valueChanges.subscribe((checked: boolean) => {
      const descriptionControl = this.studentForm.get('description');
      if (checked) {
        descriptionControl?.setValidators([Validators.required]);
      } else {
        descriptionControl?.clearValidators();
      }
      descriptionControl?.updateValueAndValidity();
    });
  }

  initForm() {
    this.studentForm = this.fb.group({
      name: [''],
      gender: [''],
      cricket: [false],
      football: [false],
      description: [''],
    });
  } 

  isDescriptionRequired: boolean = false;
  onSave() {
    // var isCricketSelected = this.studentForm.get('cricket').value;
    // var isDescription = this.studentForm.get('description').value;
    // if (isCricketSelected && isDescription == "") {
    //   this.isDescriptionRequired = true;
    // } else {
    //   this.isDescriptionRequired = false;
    // }
    if (this.studentForm.invalid) {
      this.studentForm.markAllAsTouched();
      return;
    }
    console.log('form  : ', this.studentForm.value);
  }
}
