import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fredebrick';
  main_menu: boolean= true;
  lihat_cicilan: boolean = false;
  cicilanBaru: boolean = false;
  login : boolean = false;
}

const Employmentsample: financialdatamodel =
  {
    "companyName": "PT Brick Teknologi Indonesia",
    "monthName": "01-07-2020",
    "salary": 9500000,
  	"bpjsCardNumber": "15036686069",
  	"type": "bpjs-tk",
  	"institutionId": 14
  }
const optionsToken = {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    Authorization: 'Bearer access-production-e3a8a654-29d9-11ec-9621-0242ac130002'
  }
};

let EmploymentDetail = (getFinancialData());


class financialdatamodel{

  companyName:string="PT Brick Teknologi Indonesia";
  monthName:string= "01-07-2020";
  salary:number = 9500000;
  bpjsCardNumber:string = "15036686069";
  type:string = "bpjs-tk";
  institutionId:number= 14;
}


function getFinancialData(options: any=optionsToken): any{
  let responsevalue: any;
  let returnvalue:financialdatamodel=Employmentsample;
  fetch('https://sandbox.onebrick.io/v1/income/salary/', options)
  .then(response => response.json())
  .then(response => returnvalue=response.data[1])
  .catch(err => returnvalue=Employmentsample);


  return returnvalue;
}




