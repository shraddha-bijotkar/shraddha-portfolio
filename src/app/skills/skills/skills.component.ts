import { Component, OnInit } from '@angular/core';
import { Observable, timer, of } from 'rxjs';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  width : any=0;
  r : boolean;
  i : number = 0;
  el : number;
  limits: any = [60,55,75,75,50];
  constructor() { 
    
  }
  // isWidthWithinLimit(){ //use if here

  //     if(this.i<5){
  //       console.log(this.limits[this.i]);

  //     if(this.width==this.limits[this.i]){
  //       console.log(this.limits[this.i]);
  //       this.r=false;
        
        
  //     }else{
  //       this.r=true;
  //       this.i++;

  //     }

  //   }
  //     return this.r;
  // }
    
      
  
   
//   runProgressBar(){
  
//     timer(0,100)
//     .subscribe(()=>{
//       if(this.i<5){
//          while(this.width<this.limits[this.i]){
//           this.width+=1;
//           console.log(this.width);
//           }
//           if(this.width==this.limits[this.i]){
//             this.i++;
//           }
//           }
         
//     }
//     )
     
// }
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
