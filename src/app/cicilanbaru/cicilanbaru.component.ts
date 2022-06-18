import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cicilanbaru',
  templateUrl: './cicilanbaru.component.html',
  styleUrls: ['./cicilanbaru.component.scss'],

})
export class CicilanbaruComponent implements OnInit {

  constructor(
    private fb:FormBuilder
  ) {

   }
  @Input() item = 'asdasdasd';
  FormGroup: FormGroup = this.fb.group({
    Aset:['',Validators.required],
    Harga:[0,Validators.required],
    DP:['',Validators.required],
    Bunga:['',Validators.required]
  })

  ngOnInit(): void {

  }
  SaveForm(){

  }



}
