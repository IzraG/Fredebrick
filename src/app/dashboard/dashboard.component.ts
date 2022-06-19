import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { URLConstant } from '../constant/URLConstant';
import { ResBalance } from '../model/res-balance';
import { ResIncomeInformation } from '../model/res-income-information';
import { ResTransactionList } from '../model/res-transaction-list';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  @Input() total_cicilan: number = 4000000;

  balance:number=10000000;
  salary:number=12000000;


  transactionList:ResTransactionList= new ResTransactionList()
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<ResIncomeInformation>(URLConstant.GetSalary, {}).subscribe(
      (response) => {
        this.salary = response.salary
        this.salary=10000000
      }
    )
    this.http.get<ResTransactionList>(URLConstant.GetTransaction+"from=2021-10-01&to=2022-10-31", {}).subscribe(
      (response) => {
        this.transactionList=response

      }
    )
    this.http.get<ResBalance>(URLConstant.GetBalance, {}).subscribe(
      (response) => {
        this.balance=response.balances_current
        this.balance=40000000

      }
    )
  }
}
