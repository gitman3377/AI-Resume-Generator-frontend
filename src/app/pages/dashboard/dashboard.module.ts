import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard.component';
import { RouterModule } from '@angular/router';

export const routes = [
  {
    path: '',
    component: DashboardComponent,
    data: {
      title: 'dashboard',
      urls: [{title: 'Home'},{title: 'Dashboard'}]
    }
  }
]

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DashboardModule { }
