import {  Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { ShipDetailsComponent } from './ship-details/ship-details.component';
import {MatDialog} from '@angular/material/dialog';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { anyChanged } from '@progress/kendo-angular-common';
import { Input } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  x:boolean=true;
  y:boolean=true;
  xy:boolean=true;


  title(title: any) {
    throw new Error('Method not implemented.');
  }
    timeInhrs:any;
    
    dragPosition={x:0,y:0}
    maxTime=24;
    t=2;
    timeSlot:any=[];
    startDate:any;
    //endDate:Date;
    times:any[]=['2 hrs','4 hrs','6 hrs','8 hrs','12 hrs','24 hrs'];
    planes:any[]=['x','y','xy'];
    loa:any;
    metres:any;
    min:any;
    max:any;
    axis:any;
    size:any;
    ship:any;
    dateTime:any;
    length:any;
    length1: any = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
    lockAxis:any;
    public style: object = {};
    @Input() shipDetails: object = {};
    

    //length:any[]=['0m','10m','20m','30m','40m','50m','60m','70m','80m','90m','100m','110m','120m','130m','140m','150m','160m','170m','180m','190m','200m'];
    constructor(public dialog:MatDialog,private ngZone: NgZone
      ) {
    }
  
  
    Dates:any=[];
   time:any[]=['10:00','11:00'];
   formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }

  multiplesTime()
  {
    this.timeSlot=[];
    for(let i=0;i<=this.maxTime;i++)
    {
      this.t=parseInt(this.timeInhrs.split(/(?<=^\S+)\s/));
      if(i%this.t==0) {
        this.timeSlot.push(i);
      }
    }
  }
  getDates()
  {
    this.Dates=[];
    let year=this.startDate.getFullYear();
    let month=this.startDate.getMonth();
    let endDate=new Date(year,month+1,0);
    let stDate=new Date(year,month,this.startDate.getDate());
    while(stDate<=endDate) {
         this.Dates.push(new Date(stDate));
         stDate.setUTCDate(stDate.getUTCDate() + 1);
       }
  }

  sliderLengthUnits() {
    this.length=[];
    for(let i=1;i<=50;i++){
      let value=this.metres*i;
      this.length.push(value);
    }
    console.log(this.length);
    this.min=this.length[0];
    this.max=this.length[10];
   this.size=this.length.length

  }

   dragAndDropPosition() {
    if(this.axis === "x")
    {
      this.x=true;
      this.y=false;
      this.xy=false;
    }
    else if(this.axis === "y") {
      this.x=false;
     this.y=true;
     this.xy=false;
    }
    else {
     this.x=false;
     this.y=false;
     this.xy=true;
    }
  }
  drag() {
    min:Number;
    max:Number;
    
    this.ship = "ship";
    console.log(this.ship);
  };
  onMousemove(event: MouseEvent) {
    let rectangle = document.getElementById('box').getBoundingClientRect();
    console.log(rectangle);
    let left = rectangle.left;
    let right = rectangle.right;
    let top = rectangle.top;
    let bottom = rectangle.bottom;
    

    let shiftX = event.clientX - document.getElementById('box').getBoundingClientRect().left;
    let shiftY = event.clientY - document.getElementById('box').getBoundingClientRect().top;

  }

}
