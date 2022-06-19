import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input('CurrentPage') CurrentPage?:string;
  @Output('NavigatePage') NavigatePage = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  onClick(action:string){
    this.NavigatePage.emit("action")
  }
}
