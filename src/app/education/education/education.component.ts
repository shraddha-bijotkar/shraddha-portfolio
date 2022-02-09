import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { TimelineItem } from 'ngx-vertical-timeline';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  items: TimelineItem[] = [];
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

    this.items.push({
      label: 'Action',
      icon: 'fa fa-graduation-cap',
      styleClass: 'teste',
      content: `Vidyalankar Institute Of Technology ~ Mumbai.
      Batch of 2021
      CGPA : 8.89`,
      title: 'B.E. in Information Technology',
      command() {
        
      }
    });

    this.items.push({
      label: 'Action',
      icon: 'fa fa-university',
      styleClass: 'teste',
      content: `C.H.M. college Year : 2017 78.46%`,
      title: 'HSc / XII ',
      
    });

    this.items.push({
      label: 'Action',
      icon: 'fa fa-school',
      styleClass: 'teste',
      content: `Ulhas Vidyalaya Year : 2015 92.40%`,
      title: 'SSC / X',
      
    });

   
  }

  

}
