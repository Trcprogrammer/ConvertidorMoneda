import { Component } from '@angular/core';

@Component({
  selector: 'app-convertidor',
  templateUrl: './convertidor.component.html',
  styleUrls: ['./convertidor.component.css']
})
export class ConvertidorComponent {
  cantidad:number=0;
  tengo="EUR";
  quiero="LIBRA";
  monedas:string[]=['USD','EUR','LIBRA']
  total=0;


  
    
  convertir(){
    switch(this.tengo){
      case 'USD':
       if(this.quiero === 'USD'){
        this.total = this.cantidad ;
       }
if(this.quiero === 'EUR'){
  this.total= this.cantidad * 0.91;
 
  }

  if(this.quiero === 'LIBRA'){
    this.total=this.cantidad * 0.79

  }

  break;

  case 'EUR':
    if(this.quiero === 'EUR'){
      this.total=this.cantidad;

    }

    if(this.quiero ==='USD'){

      this.total=this.cantidad * 1.09; 
    }

    if(this.quiero ==='LIBRA'){
      this.total=this.cantidad * 0.86;


    }

break;

case 'LIBRA':

if(this.quiero ==="LIBRA"){
  this.total=this.cantidad;
}

if(this.quiero==="USD"){
  this.total=this.cantidad * 1.27 ;

}

if(this.quiero=="EUR"){
  this.total=this.cantidad * 1.17;

}


}




}

       }








