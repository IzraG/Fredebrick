import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  lihat_cicilan(): void{
    // this.lihat_cicilan = true;
  }

}
