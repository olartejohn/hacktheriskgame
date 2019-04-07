import { Component } from '@angular/core';
import { Tarjeta } from './tarjeta';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'firstrisk.component.html'
})
export class FirstRiskComponent {

    public tarjeta1: Tarjeta = new Tarjeta();
    public tarjeta2: Tarjeta = new Tarjeta();
    public model: Tarjeta = new Tarjeta();
    public tarjetasDyP= new Array();

     cargarTarjeta() {
       
        this.llenarlista()
        
       // var tarjetasDyP = new Array ("Tarjeta1", "Tarjeta2", "Tarjeta3", "Tarjeta4", "Tarjeta5", "Tarjeta6", "Tarjeta7", "Tarjeta8", "Tarjeta9", "Tarjeta10");
        var maxlength = 0;
        var i =0; 
        for (i= 0; i < this.tarjetasDyP.length;i++){
          if (this.tarjetasDyP[i].length > maxlength){
           maxlength = this.tarjetasDyP[i].length;
         }
        }
       var resp = (Math.floor(Math.random() * this.tarjetasDyP.length)|0) ;
       this.model = this.tarjetasDyP[resp]
       console.log(this.tarjetasDyP);
     }

     
     llenarlista(){
        this.tarjeta1.id = "1";
        this.tarjeta1.nombre = "Inundación";
        this.tarjeta1.descripcion = "Esta es una inundación";
        this.tarjetasDyP.push(this.tarjeta1);

        this.tarjeta2.id = "2";
        this.tarjeta2.nombre = "Inundación";
        this.tarjeta2.descripcion = "Esta es una inundación";
        this.tarjetasDyP.push(this.tarjeta2);
        
     }
 }
