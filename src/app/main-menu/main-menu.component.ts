import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

  currentPage:string=""
  backPage:string=""
  emojiCollection = ['❄','❅','❆','❄','❅','❆'];
  particles = 80;
  innerWidth = window.innerWidth;


  pageHistory:Array<string>=[""]

  constructor(private renderer: Renderer2, public el : ElementRef) {
    this.currentPage="mainMenu"
   }

  ngOnInit(): void {
    this.createParticles();
  }

 

  changePage(page:string){
    this.pageHistory.push(this.currentPage)
    this.currentPage=page
  }
  back(){
    if(this.pageHistory.length>1){ 
      this.currentPage=this.pageHistory[this.pageHistory.length-1] 
      this.pageHistory.pop()
    }
    
  }

  createParticles(){
    for(let i=0; i<this.particles;i++){
      let randomEmoji = this.emojiCollection[Math.floor((Math.random() * this.emojiCollection.length))];
      let emojiLeftPosition = (innerWidth / this.particles) * i;
      let span = this.renderer.createElement('span');
      let text = this.renderer.createText(randomEmoji);
      this.renderer.appendChild(span,text);
      this.renderer.addClass(span,'snowflake');
      this.renderer.setStyle(span,'left',emojiLeftPosition + 'px');
      this.renderer.setStyle(span,'animation-duration',(this.randomMinMax(3,5.0)+'s',this.randomMinMax(3,5.0)+'s'));
      this.renderer.setStyle(span,'animation-delay',this.randomMinMax(0.3,30)+'s');
      this.renderer.appendChild(this.el.nativeElement,span)
    }
  }

  randomMinMax(min:number, max:number){
      return Math.random() * (max - min) + min;
  }

}
