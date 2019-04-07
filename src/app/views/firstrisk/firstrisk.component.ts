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
    public usuario: Usuario = new Usuario();

     cargarTarjeta() {

        this.llenarlista()
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
       console.log(this.model);
     }


     llenarlista(){
        this.tarjeta1.id = "1";
        this.tarjeta1.titulo = "Inundación";
        this.tarjeta1.descripcion = "Esta es una inundación";
        this.tarjeta1.Costo = 10000;
        this.tarjeta1.CantidadPob = 100;
        this.tarjeta1.Bienestar = 20;
        this.tarjeta1.tipo="desastre";
        this.tarjetasDyP.push(this.tarjeta1);

        this.tarjeta2.id = "2";
        this.tarjeta2.titulo = "Esta es una tsunami";
        this.tarjeta2.descripcion = "Esta es una tsunami";
        this.tarjeta1.Costo = 50000;
        this.tarjeta1.CantidadPob = 10000;
        this.tarjeta1.Bienestar = 200;
        this.tarjeta1.tipo="desastre";
        this.tarjetasDyP.push(this.tarjeta2);

     }
 }
