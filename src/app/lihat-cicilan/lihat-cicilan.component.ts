import { ListCicilan } from './../model/list-cicilan';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lihat-cicilan',
  templateUrl: './lihat-cicilan.component.html',
  styleUrls: ['./lihat-cicilan.component.scss']
})
export class LihatCicilanComponent implements OnInit {

  constructor() { }
  TotalKewajiban: number=0;
  ngOnInit(): void {
    this.TotalKewajiban = this.CicilanDummy.reduce((accumulator, current)=> {return accumulator+current.Jumlah}, 0)
  }
  Headers:Array<String> = ["NamaCicilan","Jumlah","SisaCicilan"]
  CicilanDummy: Array<ListCicilan>=[
    {
      NamaCicilan: 'Asuransi',
      Jumlah: 520000,
      SisaCicilan: '-'
    },
    {
      NamaCicilan: 'Mobil Brio',
      Jumlah: 6000000,
      SisaCicilan: 'Rp. 180,000,000.00'
    },
    {
      NamaCicilan: 'Motor Mio',
      Jumlah: 3000000,
      SisaCicilan: 'Rp. 12,000,000.00'
    },
    {
      NamaCicilan: 'Rumah Sunter',
      Jumlah: 8000000,
      SisaCicilan: 'Rp. 1,300,000,000'
    }
  ]
}
