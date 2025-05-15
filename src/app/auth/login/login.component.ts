import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
  isLogin = true;
  name: string = '';
  email: string = '';
  password: string = '';
  userid:number = 0;
  constructor(
    private authservice:AuthService,
    private toastr:ToastrService
  ){}

  ngOnInit() {
    this.onLogin()
  }

  toggle(state: boolean) {
    this.isLogin = state;
  }

  onLogin() {
    console.log('Logging in...');
    const params: any = {

    }
  }

  onSignup() {
    const params: any = {
      name: this.name,
      email: this.email,
      password: this.password,
      process_by: 'add',
      userid: this.userid
    }
    this.authservice.initiateLogin(params).subscribe((res:any) => {
      if(res[0].resultvalue == 1) {
        this.toastr.success('User added successfully!', 'Success')
        setTimeout(window.location.reload.bind(window.location),250)
      }
      if(res[0].resultvalue == -1){
        this.toastr.info('Username/Password already taken!', 'Info')
      }
    })
  }
}
