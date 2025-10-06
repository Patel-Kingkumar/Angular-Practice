import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.scss']
})
export class TopicsComponent implements OnInit {

empForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.empForm = this.fb.group({
      cricket: [false],
      football: [false],
      description: ['']
    });
  }

  ngOnInit() {
    // Conditional validation for description
    this.empForm.get('cricket')?.valueChanges.subscribe((checked) => {
      const descriptionControl = this.empForm.get('description');
      if (checked) {
        descriptionControl?.setValidators([Validators.required]);
      } else {
        descriptionControl?.clearValidators();
      }
      descriptionControl?.updateValueAndValidity();
    });
  }

  onSubmit() {
    if (this.empForm.invalid) {
      this.empForm.markAllAsTouched();
      return;
    }

    const selectedHobbies = [];
    if (this.empForm.value.cricket) selectedHobbies.push('cricket');
    if (this.empForm.value.football) selectedHobbies.push('football');

    const formData = {
      hobbies: selectedHobbies,
      description: this.empForm.value.description
    };

    console.log(formData);
  }
}
