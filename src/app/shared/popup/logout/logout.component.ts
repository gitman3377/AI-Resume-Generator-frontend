import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.scss'
})
export class LogoutComponent {

  constructor(
    public activeModal: NgbActiveModal
  ) {}

  logout() {
    this.activeModal.close(true);
  }

  closePopup() {
    this.activeModal.close(false);
  }
}