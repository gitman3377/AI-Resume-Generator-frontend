import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr'
import { ToastModule } from 'primeng/toast'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideHttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonLayoutComponent } from './common/common-layout/common-layout.component';
import { SharedModule } from './shared/shared.module';
import { MessageService} from 'primeng/api'


@NgModule({
  declarations: [
    AppComponent,
    CommonLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    SharedModule,
    ToastrModule,
    BrowserAnimationsModule,
    ToastModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-right',
      timeOut: 3000,               
      easing: 'ease-in', 
      preventDuplicates: true,               
      closeButton: true
    })
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(),
    MessageService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
