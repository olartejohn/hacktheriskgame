import { Component } from '@angular/core';
import { Tarjeta } from './tarjeta';
import {Usuario} from './usuario';

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


    ngOnInit() {
      this.cargarTarjeta();
    }

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
       //Tarjeta1
        this.tarjeta1.id = "1";
        this.tarjeta1.titulo = "Deforestación";
        this.tarjeta1.descripcion = "El deterioro ambiental junto a la pérdida de la biodiversidad, son unas de las principales amenazas para la producción de alimentos en la Tierra.";
        this.tarjeta1.Costo = -15;
        this.tarjeta1.CantidadPob = +8;
        this.tarjeta1.Bienestar = +8;
        this.tarjeta1.tipo="Desastre";
        this.tarjetasDyP.push(this.tarjeta1);
        //Tarjeta2
        this.tarjeta1.id = "2";
        this.tarjeta1.titulo = "Restauración de ecosistemas estratégicos degradados";
        this.tarjeta1.descripcion = "La humanidad con sus actividades productivas ha degradado la gran mayoría de espacios naturales y mediante la restauración ecológica se pretende devolver a su estado original a los ecosistemas afectados por dichas a actividades. Disminuyendo el impacto de otros eventos de desastre que se relacionan con la pérdida de hábitat.";
        this.tarjeta1.Costo = 50000;
        this.tarjeta1.CantidadPob = 10000;
        this.tarjeta1.Bienestar = 200;
        this.tarjeta1.tipo="desastre";
        this.tarjetasDyP.push(this.tarjeta1);
        //Tarjeta3
        this.tarjeta1.id = "3";
        this.tarjeta1.titulo = "Esta es una tsunami";
        this.tarjeta1.descripcion = "Esta es una tsunami";
        this.tarjeta1.Costo = 50000;
        this.tarjeta1.CantidadPob = 10000;
        this.tarjeta1.Bienestar = 200;
        this.tarjeta1.tipo="desastre";
        this.tarjetasDyP.push(this.tarjeta1);



     }
 }
