import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { URLConstant } from '../constant/URLConstant';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  balance:number=0;
  salary:number=0;
  //transactionList:<>
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get(URLConstant.GetSalary, {}).subscribe(
      (response) => {
        console.log(response)
      }
    )
    this.http.get(URLConstant.GetTransaction, {}).subscribe(
      (response) => {
        console.log(response)


      }
    )
  }
}
