import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  count =0;
  x=1;
 startFlag=0;
  check:any;
  flag=0;
  timer:any;
  mainTimer:any;
  secTimer:any;
  sec=60;
 
  constructor() { }

  ngOnInit() { 
 
  }

  start():void{
    this.startFlag=1;
   
    this.secTimer= setInterval(() => {
    this.sec--;
  }, 1000);

    clearInterval(this.mainTimer);
    this.mainTimer= setInterval(() => {
      alert("game is over");
      this.sec=60;
      this.startFlag=0;
      this.count=0;
      clearInterval(this.secTimer);
      clearInterval(this.timer);
      if(this.mainTimer)
      clearInterval(this.mainTimer);
  }, (1000*this.sec)+1000);

 

  }

 


 
  flipx(y):void{
    if(this.startFlag==0)
     return;
    if(this.x==y)
   this.count++;
  
  clearInterval(this.timer);
 
 this.timer= setInterval(() => {
    this.flip();
}, 500);
 


  }

  flip():void{
    this.x = Math.floor(Math.random()*4)+1 ;
    return;
  }
 

}
