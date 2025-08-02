import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MyresumeComponent } from './component/myresume/myresume.component';

export const routes = [
  {
    path: '',
    component: MyresumeComponent,
    data: {
      title: 'MyResume'
    }
  }
]

@NgModule({
  declarations: [
    MyresumeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MyresumeModule { }
