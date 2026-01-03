import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-build',
  templateUrl: './build.component.html',
  styleUrl: './build.component.scss'
})
export class BuildComponent {
  step = 1;
  userForm: FormGroup;
  slides: any = []
  totalSteps = 0;
  reviewSteps = 0;

  constructor(private fb: FormBuilder) {
    this.slides = ["General", "Academics", "Certifications", "Internships", "Languages", "Skillset"]
    this.totalSteps = this.slides.length;
    this.reviewSteps = this.totalSteps + 1;
    this.userForm = this.fb.group({
      General: this.fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        phonenumber: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
        address: ['', Validators.required],
      }),
      Academics: this.fb.group({  // can be added +
        records: this.fb.array([this.createAcademicGroup()]),
      }),
      Certifications: this.fb.group({  // can be added +
        records: this.fb.array([this.createCertification()])
      }),
      Internships: this.fb.group({  // can be added +
        records: this.fb.array([this.createInternship()])
      }),
      Languages: this.fb.group({  // can be added +
        records: this.fb.array([this.createLanguageGroup()])
      }),
      Skillset: this.fb.group({
        records: this.fb.array([this.createSkillsetGroup()])
      }),
    });
  }

  qualificationLevels = [
    'HSC',
    'Diploma',
    'Undergraduate',
    'Postgraduate',
    'PhD',
  ];

  courses = [
    'Computer Science',
    'Information Technology',
    'Electronics and Communication',
    'Electrical',
    'Mechanical',
    'Civil',
    'Nursing',
    'Medicine',
    'Business Administration',
    'Commerce',
    'Arts',
    'Science',
    'Law',
    'Literature'
  ];

  evaluationMetrics = ['Percentage', 'CGPA', 'Grade'];

  internshipTypes = ['Onsite', 'Remote', 'Hybrid', 'Online'];

  languageLevels = [
    'Elementary',
    'Beginner',
    'Intermediate',
    'Working Proficiency',
    'Fluent',
    'Native'
  ];



  createAcademicGroup(): FormGroup {
    return this.fb.group({
      qualification_level: ['', Validators.required], //dropdown
      course: ['', Validators.required],
      total_marks: ['', Validators.required],
      marks_obtained: ['', Validators.required],
      evaluation_metric: ['', Validators.required], //dropdown
    })
  }


  get academicRecords(): FormArray {
    return (this.userForm.get('Academics') as FormGroup).get('records') as FormArray;
  }

  addAcaddemic() {
    this.academicRecords.push(this.createAcademicGroup());
  }
  removeAcademic(index: number) {
    if (this.academicRecords.length > 1) {
      this.academicRecords.removeAt(index);
    }
  }


  createCertification(): FormGroup {
    return this.fb.group({
      certification_name: ['', Validators.required],
      issuer: ['', Validators.required],
      date_issued: ['', Validators.required],
      certificate_path: ['', Validators.required],
    });
  }

  get certificationRecords(): FormArray {
    return this.userForm.get('Certifications.records') as FormArray;
  }

  addCertification() {
    this.certificationRecords.push(this.createCertification());
  }

  removeCertification(i: number) {
    this.certificationRecords.removeAt(i);
  }

  createInternship(): FormGroup {
    return this.fb.group({
      internship_name: ['', Validators.required],
      company_name: ['', Validators.required],
      role: ['', Validators.required],
      duration: ['', Validators.required],
      from_date: ['', Validators.required],
      to_date: ['', Validators.required],
      stipend: [''],
      mentor: [''],
      internship_type: ['', Validators.required],
      intern_certificate_path: [''],
    });
  }

  get internshipRecords(): FormArray {
    return this.userForm.get('Internships.records') as FormArray;
  }

  addInternship() {
    this.internshipRecords.push(this.createInternship());
  }

  removeInternship(i: number) {
    this.internshipRecords.removeAt(i);
  }

  createLanguageGroup(): FormGroup {
    return this.fb.group({
      language: ['', Validators.required],
      proficiency: ['', Validators.required],
    })
  }


  get languageRecords(): FormArray {
    return (this.userForm.get('Languages') as FormGroup).get('records') as FormArray;
  }

  addLanguage() {
    this.languageRecords.push(this.createLanguageGroup());
  }
  removeLanguage(index: number) {
    if (this.languageRecords.length > 1) {
      this.languageRecords.removeAt(index);
    }
  }

  createSkillsetGroup(): FormGroup {
    return this.fb.group({
      skills: ['', Validators.required], //multiselect dropdown coding languages
      toolchain: ['', Validators.required], //worktime environment
      domain: ['', Validators.required], // fields of skill multiselect
      softskill: ['', Validators.required], //multiselect
    })
  }


  get skillsetRecords(): FormArray {
    return (this.userForm.get('Skillset') as FormGroup).get('records') as FormArray;
  }

  addSkillset() {
    this.skillsetRecords.push(this.createSkillsetGroup());
  }
  removeSkillset(index: number) {
    if (this.skillsetRecords.length > 1) {
      this.skillsetRecords.removeAt(index);
    }
  }


  markGroupTouched(group: FormGroup | FormArray) {
    Object.keys(group.controls).forEach((key) => {
      const control: any = group.get ? group.get(key) : null;
      const c = (group as any).controls ? (group as any).controls[key] : null;
      // If control is FormGroup or FormArray, recurse
      const ctrl = group.get ? group.get(key) : c;
      if (!ctrl) return;
      if (ctrl.controls) {
        // FormGroup or FormArray
        this.markGroupTouched(ctrl);
      } else {
        ctrl.markAsTouched({ onlySelf: true });
      }
    });
  }

  nextStep() {
    if (this.step === this.reviewSteps) return;
    const currentGroup = this.getCurrentGroupName();
    const group = this.userForm.get(currentGroup) as FormGroup | FormArray;
    if (!this.isStepValid()) {
      if (group)
        this.markGroupTouched(group); return;
    }
    if (this.step < this.reviewSteps) {
      this.step++;
    }
  }

  prevStep() {
    if (this.step > 1) {
      this.step--;
    }
  }

  getCurrentGroupName(): string {
    if (this.step >= 1 && this.step <= this.totalSteps) {
      return this.slides[this.step - 1];
    }
    return '';
  }

  isStepValid(): boolean {
    if (this.step === 1) return (this.userForm.get('General') as FormGroup).valid;
    if (this.step === 2) return (this.userForm.get('Academics') as FormGroup).valid;
    if (this.step === 3) return (this.userForm.get('Certifications') as FormGroup).valid;
    if (this.step === 4) return (this.userForm.get('Internships') as FormGroup).valid;
    if (this.step === 5) return (this.userForm.get('Languages') as FormGroup).valid;
    if (this.step === 6) return (this.userForm.get('Skillset') as FormGroup).valid;
    return false;
  }

  onSubmit() {
    // mark all controls touched to reveal any remaining validation messages
    this.markGroupTouched(this.userForm as any);
    if (this.userForm.valid) {
      console.log('Form Data:', this.userForm.value);
      alert('Form Submitted Successfully!');
    } else {
      alert('Please fix validation errors before submitting.');
    }
  }

  trackByIndex(index: number): number {
    return index;
  }

}
