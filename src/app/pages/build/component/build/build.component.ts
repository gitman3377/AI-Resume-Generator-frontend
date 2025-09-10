import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-build',
  templateUrl: './build.component.html',
  styleUrl: './build.component.scss'
})
export class BuildComponent {
  step = 1;
  userForm: FormGroup;
  slides:any = []

  constructor(private fb: FormBuilder){
  this.slides = ["General", "Academics", "Certifications", "Interships", "Languages", "Skillset"] 
   this.userForm = this.fb.group({
      General: this.fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        phonenumber: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
        address: ['', Validators.required],
      }),
      Academics: this.fb.group({  // can be added +
        qualification_level: ['', Validators.required], //dropdown
        course: ['', Validators.required],
        total_marks: ['', Validators.required],
        marks_obtained: ['', Validators.required],
        evaluation_metric: ['', Validators.required], //dropdown
      }),
      Certifications: this.fb.group({  // can be added +
        certification_name: ['', Validators.required],
        issuer: ['', Validators.required],
        date_issued: ['', Validators.required],
        certificate_path: ['', Validators.required],
      }),
      Interships: this.fb.group({  // can be added +
        internship_name: ['', Validators.required],
        company_name: ['', Validators.required],
        role: ['', Validators.required],
        duration: ['', Validators.required],
        from_date: ['', Validators.required],
        to_date: ['', Validators.required],
        stipend: ['', Validators.required],
        mentor: ['', Validators.required],
        internship_type: ['', Validators.required], //dropdown
        intern_certificate_path: ['', Validators.required],
      }),
      Languages: this.fb.group({  // can be added +
        language: ['', Validators.required],
        proficiency: ['', Validators.required], //dropdown
      }),
      Skillset: this.fb.group({
        skills: ['', Validators.required], //multiselect dropdown coding languages
        toolchain: ['', Validators.required], //worktime environment
        domain: ['', Validators.required], // fields of skill multiselect
        softskill: ['', Validators.required], //multiselect
      }),
    });
  }

  nextStep() {
    if (this.isStepValid()) {
      this.step++;
    }
  }

  prevStep() {
    this.step--;
  }

  isStepValid(): boolean {
    if (this.step === 1) return (this.userForm.get('General') as FormGroup).valid;
    if (this.step === 2) return (this.userForm.get('Academics') as FormGroup).valid;
    if (this.step === 3) return (this.userForm.get('Certifications') as FormGroup).valid;
    if (this.step === 4) return (this.userForm.get('Interships') as FormGroup).valid;
    if (this.step === 5) return (this.userForm.get('Languages') as FormGroup).valid;
    if (this.step === 6) return (this.userForm.get('Skillset') as FormGroup).valid;
    return false;
  }

  onSubmit() {
    if (this.userForm.valid) {
      console.log('Form Data:', this.userForm.value);
      alert('Form Submitted Successfully!');
    }
  }
}
