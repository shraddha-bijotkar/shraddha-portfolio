import { Component, OnInit, Input } from '@angular/core';
import { trigger, transition, state, animate, style, AnimationEvent } from '@angular/animations';
import { ProgressService } from '../../services/progress.service';
import { timer } from 'rxjs';
import Typed  from 'typed.js';

@Component({
  selector: 'app-about',
  
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  
  
  isOpen = false;
  width:number = 0;
  toggle() {
    this.isOpen = !this.isOpen;
  }

  @Input() logging = false;
 
  constructor( ) { }
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
    var options = {
      strings: ['Full-Stack-Developer', 'Learner','Optimist'],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
    };
    
    var typed = new Typed('.typed', options);
    typed.reset(true)

  }

}
