import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Output('NavigatePage') NavigatePage = new EventEmitter<string>();
  FormGroup: FormGroup = this.fb.group({
    username:['',Validators.required],
    password:['',Validators.required]
  })
  constructor(private fb:FormBuilder) { 
    
  }

  ngOnInit(): void {
  }

  Login(){
    this.NavigatePage.emit("dashboard")
  }
}
