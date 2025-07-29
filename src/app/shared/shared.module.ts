import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { LogoutComponent } from './popup/logout/logout.component';



@NgModule({
  declarations: [
    SidebarComponent,
    LogoutComponent
  ],
  exports: [
    SidebarComponent,
    LogoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
