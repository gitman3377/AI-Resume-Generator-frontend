import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyResumeComponent } from './my-resume/my-resume.component';
import { RouterModule } from '@angular/router';

export const routes = [
  {
    path: '',
    component: MyResumeComponent,
    data: {
      title: 'MyResume'
    }
  }
]

@NgModule({
  declarations: [
    MyResumeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MyresumeModule { }
