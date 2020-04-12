import { Component, OnInit } from '@angular/core';
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DenominationService } from '../../common/services/denomination.service';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-denominations',
  templateUrl: './denominations.component.html',
  styleUrls: ['./denominations.component.scss']
})
export class DenominationComponent implements OnInit {
  showdamaged:boolean=false;
  total:number=0;
  n10000:number=0;
  n10000t:number=0;
  n5000:number=0;
  n5000t:number=0;
  n2000:number=0;
  n2000t:number=0;
  n1000:number=0;
  n1000t:number=0;
  n500:number=0;
  n500t:number=0;
  c500:number=0;
  c500t:number=0;
  c200:number=0;
  c200t:number=0;
  c100:number=0;
  c100t:number=0;
  c50:number=0;
  c50t:number=0;
  c20:number=0;
  c20t:number=0;
  c10:number=0;
  c10t:number=0;
  c5:number=0;
  c5t:number=0;
  c1:number=0;
  c1t:number=0;
  ct0_01:number=0;
  ct0_01t:number=0;
  constructor(private modalService:MatDialog,private denominationService:DenominationService) { 
    this.total=parseFloat(localStorage.getItem('amount_to_edit'));
    
  }

  ngOnInit() {
      
    this.denominationService.getTotalValue().subscribe(val=>{
     this.total=val;
    });
    this.denominationService.getN10000().subscribe(val=>{
      this.n10000=val;
      this.n10000t=val*10000;
    });
    this.denominationService.getN5000().subscribe(val=>{
     this.n5000=val;
      this.n5000t=val*5000;
    });
    this.denominationService.getN2000().subscribe(val=>{
        this.n2000=val;
        this.n2000t=val*2000;
      });
    this.denominationService.getN1000().subscribe(val=>{
        this.n1000=val;
        this.n1000t=val*1000;
      });
      this.denominationService.getN500().subscribe(val=>{
        this.n500=val;
        this.n500t=val*500;
      });
      this.denominationService.getC500().subscribe(val=>{
        this.c500=val;
        this.c500t=val*500;
      });
      this.denominationService.getC200().subscribe(val=>{
        this.c200=val;
        this.c200t=val*200;
      });
      this.denominationService.getC100().subscribe(val=>{
        this.c100=val;
        this.c100t=val*100;
      });
      this.denominationService.getC50().subscribe(val=>{
        this.c50=val;
        this.c50t=val*50;
      });
      this.denominationService.getC20().subscribe(val=>{
        this.c20=val;
        this.c20t=val*20;
      });
      this.denominationService.getC10().subscribe(val=>{
        this.c10=val;
        this.c10t=val*10;
      });
      this.denominationService.getC5().subscribe(val=>{
        this.c5=val;
        this.c5t=val*5;
      });
      this.denominationService.getC1().subscribe(val=>{
        this.c1=val;
        this.c1t=val*1;
      });
      this.denominationService.getCT0_01().subscribe(val=>{
        this.ct0_01=val;
        this.ct0_01t=val*0.01;
      });
    this.denominationService.brakedown(this.total);
  }
  incN10000(){
    this.denominationService.setN10000("+");
  }
  descN10000(){
    this.denominationService.setN10000("-");
  }
  incN5000(){
    this.denominationService.setN5000("+");
  }
  descN5000(){
    this.denominationService.setN5000("-");
  }
  incN2000(){
   this.denominationService.setN2000("+");
  }
  descN2000(){
    this.denominationService.setN2000("-");
  }
  incN1000(){
    this.denominationService.setN1000("+");
  }
  descN1000(){
    this.denominationService.setN1000("-");
  }
  incN500(){
    this.denominationService.setN500("+");
  }
  descN500(){
    this.denominationService.setN500("-");
  }
  incc500(){
    this.denominationService.setC500("+");
  }
  descc500(){
    this.denominationService.setC500("-");
  }
  incc200(){
    this.denominationService.setC200("+");
  }
  descc200(){
    this.denominationService.setC200("-");
  }
  incc100(){
    this.denominationService.setC100("+");
  }
  descc100(){
    this.denominationService.setC100("-");
  }
  incc50(){
    this.denominationService.setC50("+");
  }
  descc50(){
    this.denominationService.setC50("-");
  }
  incc20(){
    this.denominationService.setC20("+");
  }
  descc20(){
    this.denominationService.setC20("-");
  }
  incc10(){
    this.denominationService.setC10("+");
  }
  descc10(){
    this.denominationService.setC10("-");
  }
  incc5(){
    this.denominationService.setC5("+");
  }
  descc5(){
    this.denominationService.setC5("-");
  }
  incc1(){
    this.denominationService.setC1("+");
  }
  descc1(){
    this.denominationService.setC1("-");
  }
  incct0_01(){
    this.denominationService.setCT0_01("+");
  }
  descct0_01(){
    this.denominationService.setCT0_01("-");
  }
  CalculateTotalUnits(val:number,type:string){
      switch(type){
          case "N10000":
                 var changes=val-this.n10000;
                 if(changes>0){
                    for (var i = 0; i < changes; i++){
                       this.denominationService.setN10000("+");
                    }
                 }else if(changes<0){
                     changes=-1*changes;
                    for (var i = 0; i < changes; i++){
                        this.denominationService.setN10000("-");
                     }
                 }
          break;
          case "N5000":
                 var changes=val-this.n5000;
                 if(changes>0){
                    for (var i = 0; i < changes; i++){
                       this.denominationService.setN5000("+");
                    }
                 }else if(changes<0){
                     changes=-1*changes;
                    for (var i = 0; i < changes; i++){
                        this.denominationService.setN5000("-");
                     }
                 }
          break;
          case "N2000":
                 var changes=val-this.n2000;
                 if(changes>0){
                    for (var i = 0; i < changes; i++){
                       this.denominationService.setN2000("+");
                    }
                 }else if(changes<0){
                     changes=-1*changes;
                    for (var i = 0; i < changes; i++){
                        this.denominationService.setN2000("-");
                     }
                 }
          break;
          case "N1000":
                 var changes=val-this.n1000;
                 if(changes>0){
                    for (var i = 0; i < changes; i++){
                       this.denominationService.setN1000("+");
                    }
                 }else if(changes<0){
                     changes=-1*changes;
                    for (var i = 0; i < changes; i++){
                        this.denominationService.setN1000("-");
                     }
                 }
          break;
          case "N500":
                 var changes=val-this.n500;
                 if(changes>0){
                    for (var i = 0; i < changes; i++){
                       this.denominationService.setN500("+");
                    }
                 }else if(changes<0){
                     changes=-1*changes;
                    for (var i = 0; i < changes; i++){
                        this.denominationService.setN500("-");
                     }
                 }
          break;
          case "C500":
                 var changes=val-this.c500;
                 if(changes>0){
                    for (var i = 0; i < changes; i++){
                       this.denominationService.setC500("+");
                    }
                 }else if(changes<0){
                     changes=-1*changes;
                    for (var i = 0; i < changes; i++){
                        this.denominationService.setC500("-");
                     }
                 }
          break;
          case "C200":
                 var changes=val-this.c200;
                 if(changes>0){
                    for (var i = 0; i < changes; i++){
                       this.denominationService.setC200("+");
                    }
                 }else if(changes<0){
                     changes=-1*changes;
                    for (var i = 0; i < changes; i++){
                        this.denominationService.setC200("-");
                     }
                 }
          break;
          case "C100":
                 var changes=val-this.c100;
                 if(changes>0){
                    for (var i = 0; i < changes; i++){
                       this.denominationService.setC100("+");
                    }
                 }else if(changes<0){
                     changes=-1*changes;
                    for (var i = 0; i < changes; i++){
                        this.denominationService.setC100("-");
                     }
                 }
          break;
          case "C50":
                 var changes=val-this.c50;
                 if(changes>0){
                    for (var i = 0; i < changes; i++){
                       this.denominationService.setC50("+");
                    }
                 }else if(changes<0){
                     changes=-1*changes;
                    for (var i = 0; i < changes; i++){
                        this.denominationService.setC50("-");
                     }
                 }
          break;
          case "C20":
                 var changes=val-this.c20;
                 if(changes>0){
                    for (var i = 0; i < changes; i++){
                       this.denominationService.setC20("+");
                    }
                 }else if(changes<0){
                     changes=-1*changes;
                    for (var i = 0; i < changes; i++){
                        this.denominationService.setC20("-");
                     }
                 }
          break;
          case "C10":
                 var changes=val-this.c10;
                 if(changes>0){
                    for (var i = 0; i < changes; i++){
                       this.denominationService.setC10("+");
                    }
                 }else if(changes<0){
                     changes=-1*changes;
                    for (var i = 0; i < changes; i++){
                        this.denominationService.setC10("-");
                     }
                 }
          break;
          case "C5":
                 var changes=val-this.c5;
                 if(changes>0){
                    for (var i = 0; i < changes; i++){
                       this.denominationService.setC5("+");
                    }
                 }else if(changes<0){
                     changes=-1*changes;
                    for (var i = 0; i < changes; i++){
                        this.denominationService.setC5("-");
                     }
                 }
          break;
          case "C1":
                 var changes=val-this.c1;
                 if(changes>0){
                    for (var i = 0; i < changes; i++){
                       this.denominationService.setC1("+");
                    }
                 }else if(changes<0){
                     changes=-1*changes;
                    for (var i = 0; i < changes; i++){
                        this.denominationService.setC1("-");
                     }
                 }
          break;
          case "CT0_01":
                 var changes=val-this.ct0_01;
                 if(changes>0){
                    for (var i = 0; i < changes; i++){
                       this.denominationService.setCT0_01("+");
                    }
                 }else if(changes<0){
                     changes=-1*changes;
                    for (var i = 0; i < changes; i++){
                        this.denominationService.setCT0_01("-");
                     }
                 }
          break;
          default:
              alert('Invalid Denomination detected');
      }
  }
close(){
   this.modalService.closeAll();
}
showDamaged(){
  this.showdamaged=true;
}
IncrementUnits(obj) {
  var units = 0;
  switch (obj)
  {
      case "N10000":
          var old_units =(<HTMLInputElement>document.getElementById('n10000count')).value;
          units = parseInt(old_units) + 1;
          (<HTMLInputElement>document.getElementById('n10000count')).value= units+"";
          var total = units * 10000;
          (<HTMLInputElement>document.getElementById('n10000total')).value = total+"";
           this.getTotalValueDenominations();
          break;
      case "N5000":
          var old_units = (<HTMLInputElement>document.getElementById('n5000count')).value;
          units = parseInt(old_units) + 1;
          (<HTMLInputElement>document.getElementById('n5000count')).value = units+"";
          var total = units * 5000;
          (<HTMLInputElement>document.getElementById('n5000total')).value = total+"";
           this.getTotalValueDenominations();
          break;
      case "N2000":
          var old_units = (<HTMLInputElement>document.getElementById('n2000count')).value;
          units = parseInt(old_units) + 1;
          (<HTMLInputElement>document.getElementById('n2000count')).value = units+"";
          var total = units * 2000;
          (<HTMLInputElement>document.getElementById('n2000total')).value = total+"";
           this.getTotalValueDenominations();
          break;
      case "N1000":
          var old_units = (<HTMLInputElement>document.getElementById('n1000count')).value;
          units = parseInt(old_units) + 1;
          (<HTMLInputElement>document.getElementById('n1000count')).value = units+"";
          var total = units * 1000;
          (<HTMLInputElement>document.getElementById('n1000total')).value = total+"";
           this.getTotalValueDenominations();
          break;
      case "N500":
          var old_units = (<HTMLInputElement>document.getElementById('n500count')).value;
          units = parseInt(old_units) + 1;
          (<HTMLInputElement>document.getElementById('n500count')).value = units+"";
          var total = units * 500;
          (<HTMLInputElement>document.getElementById('n500total')).value = total+"";
           this.getTotalValueDenominations();
          break;
      case "C500":
          var old_units = (<HTMLInputElement>document.getElementById('c500count')).value;
          units = parseInt(old_units) + 1;
          (<HTMLInputElement>document.getElementById('c500count')).value = units+"";
          var total = units * 500;
          (<HTMLInputElement>document.getElementById('c500total')).value = total+"";
           this.getTotalValueDenominations();
          break;
      case "N200":
          var old_units = (<HTMLInputElement>document.getElementById('n200count')).value;
          units = parseInt(old_units) + 1;
          (<HTMLInputElement>document.getElementById('n200count')).value = units+"";
          var total = units * 200;
          (<HTMLInputElement>document.getElementById('n200total')).value = total+"";
           this.getTotalValueDenominations();
          break;
      case "N100":
          var old_units = (<HTMLInputElement>document.getElementById('n100count')).value;
          units = parseInt(old_units) + 1;
          (<HTMLInputElement>document.getElementById('n100count')).value = units+"";
          var total = units * 100;
          (<HTMLInputElement>document.getElementById('n100total')).value = total+"";
           this.getTotalValueDenominations();
          break;
      case "N50":
          var old_units = (<HTMLInputElement>document.getElementById('n50count')).value;
          units = parseInt(old_units) + 1;
          (<HTMLInputElement>document.getElementById('n50count')).value = units+"";
          var total = units * 50;
          (<HTMLInputElement>document.getElementById('n50total')).value = total+"";
           this.getTotalValueDenominations();
          break;
      case "N20":
          var old_units = (<HTMLInputElement>document.getElementById('n20count')).value;
          units = parseInt(old_units) + 1;
          (<HTMLInputElement>document.getElementById('n20count')).value = units+"";
          var total = units * 20;
          (<HTMLInputElement>document.getElementById('n20total')).value = total+"";
           this.getTotalValueDenominations();
          break;
      case "N10":
          var old_units = (<HTMLInputElement>document.getElementById('n10count')).value;
          units = parseInt(old_units) + 1;
          (<HTMLInputElement>document.getElementById('n10count')).value = units+"";
          var total = units * 10;
          (<HTMLInputElement>document.getElementById('n10total')).value = total+"";
           this.getTotalValueDenominations();
          break;
      case "N5":
          var old_units = (<HTMLInputElement>document.getElementById('n5count')).value;
          units = parseInt(old_units) + 1;
          (<HTMLInputElement>document.getElementById('n5count')).value = units+"";
          var total = units * 5;
          (<HTMLInputElement>document.getElementById('n5total')).value = total+"";
           this.getTotalValueDenominations();
          break;

      case "N1":
          var old_units = (<HTMLInputElement>document.getElementById('n1count')).value;
          units = parseInt(old_units) + 1;
          (<HTMLInputElement>document.getElementById('n1count')).value = units+"";
          var total = units * 1;
          (<HTMLInputElement>document.getElementById('n1total')).value = total+"";
           this.getTotalValueDenominations();
          break;
      case "Cents":
          var old_units = (<HTMLInputElement>document.getElementById('Centscount')).value;
          units = parseInt(old_units) + 1;
          (<HTMLInputElement>document.getElementById('Centscount')).value = units+"";
          var total = units * 0.01;
          (<HTMLInputElement>document.getElementById('Centstotal')).value = total+"";
           this.getTotalValueDenominations();
          break;
      case "M10000":
          var old_units = (<HTMLInputElement>document.getElementById('M10000count')).value;
          units = parseInt(old_units) + 1;
          (<HTMLInputElement>document.getElementById('M10000count')).value = units+"";
          var total = units * 10000;
          (<HTMLInputElement>document.getElementById('M10000total')).value = total+"";
           this.getTotalValueDenominations();
          break;
      case "M5000":
          var old_units = (<HTMLInputElement>document.getElementById('M5000count')).value;
          units = parseInt(old_units) + 1;
          (<HTMLInputElement>document.getElementById('M5000count')).value = units+"";
          var total = units * 5000;
          (<HTMLInputElement>document.getElementById('M5000total')).value = total+"";
           this.getTotalValueDenominations();
          break;
      case "M2000":
          var old_units = (<HTMLInputElement>document.getElementById('M2000count')).value;
          units = parseInt(old_units) + 1;
          (<HTMLInputElement>document.getElementById('M2000count')).value = units+"";
          var total = units * 2000;
          (<HTMLInputElement>document.getElementById('M2000total')).value = total+"";
           this.getTotalValueDenominations();
          break;
      case "M1000":
          var old_units = (<HTMLInputElement>document.getElementById('M1000count')).value;
          units = parseInt(old_units) + 1;
          (<HTMLInputElement>document.getElementById('M1000count')).value = units+"";
          var total = units * 1000;
          (<HTMLInputElement>document.getElementById('M1000total')).value = total+"";
           this.getTotalValueDenominations();
          break;
      case "M500":
          var old_units = (<HTMLInputElement>document.getElementById('M500count')).value;
          units = parseInt(old_units) + 1;
          (<HTMLInputElement>document.getElementById('M500count')).value = units+"";
          var total = units * 500;
          (<HTMLInputElement>document.getElementById('M500total')).value = total+"";
           this.getTotalValueDenominations();
          break;
      case "CD500":
          var old_units = (<HTMLInputElement>document.getElementById('CD500count')).value;
          units = parseInt(old_units) + 1;
          (<HTMLInputElement>document.getElementById('CD500count')).value = units+"";
          var total = units * 500;
          (<HTMLInputElement>document.getElementById('CD500total')).value = total+"";
           this.getTotalValueDenominations();
          break;
      case "CD200":
          var old_units = (<HTMLInputElement>document.getElementById('CD200count')).value;
          units = parseInt(old_units) + 1;
          (<HTMLInputElement>document.getElementById('CD200count')).value = units+"";
          var total = units * 200;
          (<HTMLInputElement>document.getElementById('CD200total')).value = total+"";
           this.getTotalValueDenominations();
          break;
      case "CD100":
          var old_units = (<HTMLInputElement>document.getElementById('CD100count')).value;
          units = parseInt(old_units) + 1;
          (<HTMLInputElement>document.getElementById('CD100count')).value = units+"";
          var total = units * 100;
          (<HTMLInputElement>document.getElementById('CD100total')).value = total+"";
           this.getTotalValueDenominations();
          break;
      case "CD50":
          var old_units = (<HTMLInputElement>document.getElementById('CD50count')).value;
          units = parseInt(old_units) + 1;
          (<HTMLInputElement>document.getElementById('CD50count')).value = units+"";
          var total = units * 50;
          (<HTMLInputElement>document.getElementById('CD50total')).value = total+"";
           this.getTotalValueDenominations();
          break;
      case "CD20":
          var old_units = (<HTMLInputElement>document.getElementById('CD20count')).value;
          units = parseInt(old_units) + 1;
          (<HTMLInputElement>document.getElementById('CD20count')).value = units+"";
          var total = units * 20;
          (<HTMLInputElement>document.getElementById('CD20total')).value = total+"";
           this.getTotalValueDenominations();
          break;
      case "CD10":
          var old_units = (<HTMLInputElement>document.getElementById('CD10count')).value;
          units = parseInt(old_units) + 1;
          (<HTMLInputElement>document.getElementById('CD10count')).value = units+"";
          var total = units * 10;
          (<HTMLInputElement>document.getElementById('CD10total')).value = total+"";
           this.getTotalValueDenominations();
          break;
      case "CD5":
          var old_units = (<HTMLInputElement>document.getElementById('CD5count')).value;
          units = parseInt(old_units) + 1;
          (<HTMLInputElement>document.getElementById('CD5count')).value = units+"";
          var total = units * 5;
          (<HTMLInputElement>document.getElementById('CD5total')).value = total+"";
           this.getTotalValueDenominations();
          break;
      case "CD1":
          var old_units = (<HTMLInputElement>document.getElementById('CD1count')).value;
          units = parseInt(old_units) + 1;
          (<HTMLInputElement>document.getElementById('CD1count')).value = units+"";
          var total = units * 1;
          (<HTMLInputElement>document.getElementById('CD1total')).value = total+"";
           this.getTotalValueDenominations();
          break;

      default:
          alert('Invalid Denomination detected');
  }
}
 getTotalValueDenominations(){

}
save(){
    this.denominationService.totalbefore.next(this.total);
    this.modalService.closeAll();
}
}
