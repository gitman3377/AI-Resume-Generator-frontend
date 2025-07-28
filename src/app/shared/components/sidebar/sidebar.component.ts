import { Component, OnInit } from '@angular/core';
import { mainmenu } from './sidebar_menu';
import { Router } from '@angular/router';

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
  public router: Router
)
{}

ngOnInit() {
  
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
