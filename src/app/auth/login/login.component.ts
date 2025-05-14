import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
   isLogin = true;
   name:string = '';
   email:string = '';
   password:string = '';

  toggle(state: boolean) {
    this.isLogin = state;
  }

  onLogin() {
    
    console.log('Logging in...');
  }

  onSignup() {
    
    console.log('Signing up...');
  }
}
