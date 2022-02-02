import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  width:number = 0;
  constructor() { }
  isWidthInLimit(){
    if(this.width==10){
      return false;
    }
    else{
      return true;
    }
  }
  runProgressBar(){
    timer(0,10).subscribe(()=>{
      if(this.isWidthInLimit()==true){
        this.width+=1;
      }
    })
  }
  ngOnInit(): void {
    this.runProgressBar();
  }
}
