import { calculate_installmentFixedRegular, SkemaCicilan } from './../model/skema-cicilan';
import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cicilanbaru',
  templateUrl: './cicilanbaru.component.html',
  styleUrls: ['./cicilanbaru.component.scss'],

})
export class CicilanbaruComponent implements OnInit {
  viewDataCicilan: boolean = false;
  SkemaCicilan: SkemaCicilan = new SkemaCicilan;


  constructor(
    private fb:FormBuilder
  ) {

   }
  @Input() item = 'asdasdasd';
  FormGroup: FormGroup = this.fb.group({
    Aset:['',Validators.required],
    Harga:[0,Validators.required],
    DP:[0],
    Bunga:[0]
  })

  ngOnInit(): void {

  }
  SaveForm(){
    this.viewDataCicilan=true;
    let Form = this.FormGroup.value;
    this.SkemaCicilan = calculate_installmentFixedRegular( 
    this.FormGroup.get("Harga")?.value,
    this.FormGroup.get("DP")?.value,
    this.FormGroup.get("Bunga")?.value,
    this.FormGroup.get("Harga")?.value,
    
    )
  }



}
