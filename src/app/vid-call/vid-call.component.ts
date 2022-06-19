import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vid-call',
  templateUrl: './vid-call.component.html',
  styleUrls: ['./vid-call.component.scss']
})
export class VidCallComponent implements OnInit {
  ViewVidCall: Boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
