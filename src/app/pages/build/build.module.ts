import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BuildComponent } from './component/build/build.component';

export const routes = [
  {
    path: '',
    component: BuildComponent,
    data: {
      title: 'ResumeBuilder'
    }
  }
]

@NgModule({
  declarations: [
    BuildComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
})
export class BuildModule { }
