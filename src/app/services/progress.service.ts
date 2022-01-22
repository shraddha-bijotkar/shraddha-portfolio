import { Injectable } from '@angular/core';
import { timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgressService {
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
}
