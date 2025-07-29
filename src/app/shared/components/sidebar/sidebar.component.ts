import { Component, OnInit } from '@angular/core';
import { mainmenu } from './sidebar_menu';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LogoutComponent } from '../../popup/logout/logout.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit{

  public href:string = "";

  mainmenu:any = mainmenu;
  activeMenu:any;

constructor(
  public router: Router,
  private modalService: NgbModal
)
{}

ngOnInit() {
  
}

logout(){
  const modalRef = this.modalService.open(LogoutComponent,{windowClass: "my_class", backdrop: 'static'})
      modalRef.result.then(result => {
      if (result) {
        //---//
      }
    })
}

ngDoCheck(){
  this.activeMenu = this.removespecialcharacters(this.router.url);
  this.href = this.router.url;

  let all = this.href.split('/');
  this.activeMenu = all[1];
}

removespecialcharacters(word:string){
  return word.replace(/[^a-zA-Z0-9\s]/g, '');
}

}
