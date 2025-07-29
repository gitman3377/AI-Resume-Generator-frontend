import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.scss'
})
export class LogoutComponent {

  constructor(
    public router: Router,
    public activeModal: NgbActiveModal
  ){}

  logout(){
    this.activeModal.close();
    this.router.navigate(['auth/login'])
  }

  closePopup(){
    this.activeModal.close();
  }
}
