import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DenominationService {
  total = new Subject<number>();
  totalbefore = new Subject<number>();
  n10000 = new Subject<number>();
  n5000 = new Subject<number>();
  n2000 = new Subject<number>();
  n1000 = new Subject<number>();
  n500 = new Subject<number>();
  c500 = new Subject<number>();
  c200 = new Subject<number>();
  c100 = new Subject<number>();
  c50 = new Subject<number>();
  c20 = new Subject<number>();
  c10 = new Subject<number>();
  c5= new Subject<number>();
  c1 = new Subject<number>();
  ct0_01 = new Subject<number>();
  currentTotal:number=0;
  currentN10000:number=0;
  currentN5000:number=0;
  currentN2000:number=0;
  currentN1000:number=0;
  currentN500:number=0;
  currentC500:number=0;
  currentC200:number=0;
  currentC100:number=0;
  currentC50:number=0;
  currentC20:number=0;
  currentC10:number=0;
  currentC5:number=0;
  currentC1:number=0;
  currentCT0_01:number=0;
  constructor() {
    
    this.total.next(0);
    this.n10000.next(0);
    this.n5000.next(0);
    this.n2000.next(0);
    this.n1000.next(0);
    this.n500.next(0);
    this.c500.next(0);
    this.c200.next(0);
    this.c100.next(0);
    this.c50.next(0);
    this.c20.next(0);
    this.c10.next(0);
    this.c5.next(0);
    this.c1.next(0);
    this.ct0_01.next(0);
    this.getTotalValue().subscribe(vl=>{
     this.currentTotal=vl;
    });
    this.getN10000().subscribe(vl=>{
      this.currentN10000=vl;
     });
     this.getN5000().subscribe(vl=>{
      this.currentN5000=vl;
     });
     this.getN2000().subscribe(vl=>{
      this.currentN2000=vl;
     });
     this.getN1000().subscribe(vl=>{
      this.currentN1000=vl;
     });
     this.getN500().subscribe(vl=>{
      this.currentN500=vl;
     });
     this.getC500().subscribe(vl=>{
      this.currentC500=vl;
     });
     this.getC200().subscribe(vl=>{
      this.currentC200=vl;
     });
     this.getC100().subscribe(vl=>{
      this.currentC100=vl;
     });
     this.getC50().subscribe(vl=>{
      this.currentC50=vl;
     });
     this.getC20().subscribe(vl=>{
      this.currentC20=vl;
     });
     this.getC10().subscribe(vl=>{
      this.currentC10=vl;
     });
     this.getC5().subscribe(vl=>{
      this.currentC5=vl;
     });
     this.getC1().subscribe(vl=>{
      this.currentC1=vl;
     });
     this.getCT0_01().subscribe(vl=>{
      this.currentCT0_01=vl;
     });
   }
   
brakedown(amount:number){
  this.clear();
  this.totalbefore.next(amount);
  var amt=amount;
  while(amt>=10000){
    this.setN10000("+");
    amt=amt-10000;
  }
  while(amt>=5000){
    this.setN5000("+");
    amt=amt-5000;
  }
  while(amt>=2000){
    this.setN2000("+");
    amt=amt-2000;
  }
  while(amt>=1000){
    this.setN1000("+");
    amt=amt-1000;
  }
  while(amt>=500){
    this.setN500("+");
    amt=amt-500;
  }
  while(amt>=200){
    this.setC200("+");
    amt=amt-200;
  }
  while(amt>=100){
    this.setC100("+");
    amt=amt-100;
  }
  while(amt>=50){
    this.setC50("+");
    amt=amt-50;
  }
  while(amt>=20){
    this.setC20("+");
    amt=amt-20;
  }
  while(amt>=10){
    this.setC10("+");
    amt=amt-10;
  }
  while(amt>=1){
    this.setC1("+");
    amt=amt-1;
  }
  while(amt>=0.01){
    this.setCT0_01("+");
    amt=amt-0.01;
  }
}
//get and set Totalvalue
getTotalValue(): Observable<number>{
  return this.total.asObservable();
}
setTotalValue(type:String,amount:number){
  if(type=="+"){
     
      var total=amount+this.currentTotal;
      this.total.next(total);
  }else{
    var total=this.currentTotal-amount;
      this.total.next(total);
  }
}
   //get and set N10000
  getN10000(): Observable<number>{
    return this.n10000.asObservable();
  }
  setN10000(type:String){
    if(type=="+"){
        var total=this.currentN10000+1;
         this.n10000.next(total);
         this.setTotalValue("+",10000);
      
    }else{
      if(this.currentN10000>0){
        var total=this.currentN10000-1;
        this.n10000.next(total);
        this.setTotalValue("-",10000);
      }
      
     }
  }
  //get and set N5000
  getN5000(): Observable<number>{
    return this.n5000.asObservable();
  }
  setN5000(type:String){
    if(type=="+"){
      var total=this.currentN5000+1;
         this.n5000.next(total);
         this.setTotalValue("+",5000);
         
    }else{
      if(this.currentN5000>0){
        var total=this.currentN5000-1;
        this.n5000.next(total);
        this.setTotalValue("-",5000);
      }
       
      }
  }
  //get and set N2000
  getN2000(): Observable<number>{
    return this.n2000.asObservable();
  }
  setN2000(type:String){
    if(type=="+"){
      var total=this.currentN2000+1;
         this.n2000.next(total);
         this.setTotalValue("+",2000);
         
    }else{
      if(this.currentN2000>0){
        var total=this.currentN2000-1;
        this.n2000.next(total);
        this.setTotalValue("-",2000);
      }
       
      }
  }
  //get and set N1000
  getN1000(): Observable<number>{
    return this.n1000.asObservable();
  }
  setN1000(type:String){
    if(type=="+"){
      var total=this.currentN1000+1;
         this.n1000.next(total);
         this.setTotalValue("+",1000);
         
    }else{
      if(this.currentN1000>0){
        var total=this.currentN1000-1;
        this.n1000.next(total);
        this.setTotalValue("-",1000);
      }
      
      }
  }
 //get and set N500
 getN500(): Observable<number>{
  return this.n500.asObservable();
}
setN500(type:String){
  if(type=="+"){
    var total=this.currentN500+1;
       this.n500.next(total);
       this.setTotalValue("+",500);
       
  }else{
    if(this.currentN500>0){
      var total=this.currentN500-1;
      this.n500.next(total);
      this.setTotalValue("-",500);
    }
    }
}
 //get and set C500
 getC500(): Observable<number>{
  return this.c500.asObservable();
}
setC500(type:String){
  if(type=="+"){
    var total=this.currentC500+1;
       this.c500.next(total);
       this.setTotalValue("+",500);
       
  }else{
    if(this.currentC500>0){
      var total=this.currentC500-1;
      this.c500.next(total);
      this.setTotalValue("-",500);
    }
     
    }
}
 //get and set C200
 getC200(): Observable<number>{
  return this.c200.asObservable();
}
setC200(type:String){
  if(type=="+"){
    var total=this.currentC200+1;
       this.c200.next(total);
       this.setTotalValue("+",200);
       
  }else{
    if(this.currentC200>0){
      var total=this.currentC200-1;
      this.c200.next(total);
      this.setTotalValue("-",200);
    }
     
    }
}
 //get and set C100
 getC100(): Observable<number>{
  return this.c100.asObservable();
}
setC100(type:String){
  if(type=="+"){
    var total=this.currentC100+1;
       this.c100.next(total);
       this.setTotalValue("+",100);
       
  }else{
    if(this.currentC100>0){
      var total=this.currentC100-1;
      this.c100.next(total);
      this.setTotalValue("-",100);
    }
     
    }
}
 //get and set C50
 getC50(): Observable<number>{
  return this.c50.asObservable();
}
setC50(type:String){
  if(type=="+"){
    var total=this.currentC50+1;
       this.c50.next(total);
       this.setTotalValue("+",50);
       
  }else{
    if(this.currentC50>0){
      var total=this.currentC50-1;
      this.c50.next(total);
      this.setTotalValue("-",50);
    }
    
    }
}
 //get and set C20
 getC20(): Observable<number>{
  return this.c20.asObservable();
}
setC20(type:String){
  if(type=="+"){
    var total=this.currentC20+1;
       this.c20.next(total);
       this.setTotalValue("+",20);
       
  }else{
    if(this.currentC20>0){
      var total=this.currentC20-1;
      this.c20.next(total);
      this.setTotalValue("-",20);
    }
     
    }
}
//get and set C10
getC10(): Observable<number>{
  return this.c10.asObservable();
}
setC10(type:String){
  if(type=="+"){
    var total=this.currentC10+1;
       this.c10.next(total);
       this.setTotalValue("+",10);
       
  }else{
    if(this.currentC10>0){
      var total=this.currentC10-1;
      this.c10.next(total);
      this.setTotalValue("-",10);
    }
     
    }
}
//get and set C5
getC5(): Observable<number>{
  return this.c5.asObservable();
}
setC5(type:String){
  if(type=="+"){
    var total=this.currentC5+1;
       this.c5.next(total);
       this.setTotalValue("+",5);
       
  }else{
    if(this.currentC5>0){
      var total=this.currentC5-1;
      this.c5.next(total);
      this.setTotalValue("-",5);
    }
     
    }
}
//get and set C1
getC1(): Observable<number>{
  return this.c1.asObservable();
}
setC1(type:String){
  if(type=="+"){
    var total=this.currentC1+1;
       this.c1.next(total);
       this.setTotalValue("+",1);
       
  }else{
    if(this.currentC1>0){
      var total=this.currentC1-1;
      this.c1.next(total);
      this.setTotalValue("-",1);
    }
     
    }
}
//get and set C10
getCT0_01(): Observable<number>{
  return this.ct0_01.asObservable();
}
setCT0_01(type:String){
  if(type=="+"){
    var total=this.currentCT0_01+1;
       this.ct0_01.next(total);
       this.setTotalValue("+",0.01);
       
  }else{
    if(this.currentCT0_01>0){
      var total=this.currentCT0_01-1;
      this.ct0_01.next(total);
      this.setTotalValue("-",0.01);
    }
     
    }
}
clear(){
    this.total.next(0);
    this.n10000.next(0);
    this.n5000.next(0);
    this.n2000.next(0);
    this.n1000.next(0);
    this.n500.next(0);
    this.c500.next(0);
    this.c200.next(0);
    this.c100.next(0);
    this.c50.next(0);
    this.c20.next(0);
    this.c10.next(0);
    this.c5.next(0);
    this.c1.next(0);
    this.ct0_01.next(0); 
    this.totalbefore.next(0);
}
}
