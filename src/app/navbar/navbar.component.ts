import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input('CurrentPage') CurrentPage?:string;
  @Output('Back') Back = new EventEmitter<string>();
  @Output('LoginPage') LoginPage = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  onClick(action:string){
    this.Back.emit(action)
  }
  onLogin(){
    this.LoginPage.emit("login")
  }
}
