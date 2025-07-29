import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeBuildComponent } from './resume-build/resume-build.component';
import { RouterModule } from '@angular/router';

export const routes = [
  {
    path: '',
    component: ResumeBuildComponent,
    data: {
      title: 'ResumeBuilder'
    }
  }
]

@NgModule({
  declarations: [
    ResumeBuildComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class BuildModule { }
