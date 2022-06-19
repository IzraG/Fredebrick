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
  Headers:Array<String> = ["Installment Amount","Pokok","Bunga","Sisa Pokok"]

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
    this.SkemaCicilan = calculate_installmentFixedRegular(Form.Harga, Form.DP,Form.Bunga, 5000000);
    console.log(this.SkemaCicilan);
  }



}
