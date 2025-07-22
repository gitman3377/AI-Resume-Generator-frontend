import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonLayoutComponent } from './common-layout/common-layout.component';
import { SharedModule } from '../shared/shared.module';

export const CONTAINERS = {
  CommonLayoutComponent
}

@NgModule({
  declarations: [
    CommonLayoutComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class CommonLayoutModule { }
