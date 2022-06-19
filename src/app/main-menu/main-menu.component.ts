import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

  currentPage:string=""
  backPage:string=""

  constructor() {
    this.currentPage="mainMenu"
   }

  ngOnInit(): void {
  }

 

  changePage(page:string){
    this.backPage=this.currentPage
    this.currentPage=page
  }
  back(){
    this.currentPage=this.backPage
  }

}
