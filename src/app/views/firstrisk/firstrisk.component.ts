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
  public tarjeta3: Tarjeta = new Tarjeta();
  public tarjeta4: Tarjeta = new Tarjeta();
  public tarjeta5: Tarjeta = new Tarjeta();
  public tarjeta6: Tarjeta = new Tarjeta();
  public tarjeta7: Tarjeta = new Tarjeta();
  public tarjeta8: Tarjeta = new Tarjeta();
  public tarjeta9: Tarjeta = new Tarjeta();
  public tarjeta10: Tarjeta = new Tarjeta();
    public model: Tarjeta = new Tarjeta();
    public tarjetasDyP= new Array();
    public usuario1: Usuario = new Usuario();


    ngOnInit() {
      this.cargarTarjeta();
      this.llenarUsuarioIconos();
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
       
       this.restarvariables();
     }

     cargarTarjetaNo() {

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
       this.tarjeta1.titulo = "Deforestación";
       this.tarjeta1.descripcion = "El deterioro ambiental junto a la pérdida de la biodiversidad, son unas de las principales amenazas para la producción de alimentos en la Tierra.";
       this.tarjeta1.Costo = -15;
       this.tarjeta1.Bienestar = -8;
       this.tarjeta1.CantidadPob = -8;
       this.tarjetasDyP.push(this.tarjeta1);

       this.tarjeta2.id = "2";
       this.tarjeta2.titulo = "Restauración de ecosistemas estratégicos degradados";
       this.tarjeta2.descripcion = "La humanidad con sus actividades productivas ha degradado la gran mayoría de espacios naturales y mediante la restauración ecológica se pretende devolver a su estado original a los ecosistemas afectados por dichas a actividades. Disminuyendo el impacto de otros eventos de desastre que se relacionan con la pérdida de hábitat.";
       this.tarjeta2.Costo = -15;
       this.tarjeta2.Bienestar = 10;
       this.tarjeta2.CantidadPob = 5;
       this.tarjetasDyP.push(this.tarjeta2);

       this.tarjeta3.id = "3";
       this.tarjeta3.titulo = "Deterioro a la Salud I";
       this.tarjeta3.descripcion = "Las quemas de madera(biomasa) por deforestación e incendios forestales conllevan una gran emisión de gases de efecto invernadero y material particulado que afecta fuertemente a la población en el corto, mediano y largo plazo.";
       this.tarjeta3.Costo = -2;
       this.tarjeta3.Bienestar = -3;
       this.tarjeta3.CantidadPob = -4;
       this.tarjetasDyP.push(this.tarjeta3);

       this.tarjeta4.id = "4";
       this.tarjeta4.titulo = "Material Particulado y Contaminación Atmosférica";
       this.tarjeta4.descripcion = "Una miriada de actividades humanas generan impactos negativos sobre la calidad del aire,  promoviendo procesos de desertificación y muertes por enfermedades respiratorias agudas.";
       this.tarjeta4.Costo = -6;
       this.tarjeta4.Bienestar = -6;
       this.tarjeta4.CantidadPob = -8;
       this.tarjetasDyP.push(this.tarjeta4);

       this.tarjeta5.id = "5";
       this.tarjeta5.titulo = "Deterioro a la Salud II";
       this.tarjeta5.descripcion = "Las quemas de madera(biomasa) por deforestación e incendios forestales conllevan una gran emisión de gases de efecto invernadero y material particulado que afecta fuertemente a la población en el corto, mediano y largo plazo.";
       this.tarjeta5.Costo = -2;
       this.tarjeta5.Bienestar = -2;
       this.tarjeta5.CantidadPob = -2;
       this.tarjetasDyP.push(this.tarjeta5);

       this.tarjeta6.id = "6";
       this.tarjeta6.titulo = "Tormenta I";
       this.tarjeta6.descripcion = "Eventos de lluvias torrenciales de baja intensidad se hacen comunes, estos generan ciertos contratiempos sobre la infraestructura y los flujos de materia y energía en las ciudades y áreas rurales.";
       this.tarjeta6.Costo = -1;
       this.tarjeta6.Bienestar = -1;
       this.tarjeta6.CantidadPob = 0;
       this.tarjetasDyP.push(this.tarjeta6);

       this.tarjeta6.id = "6";
       this.tarjeta6.titulo = "Tormenta I";
       this.tarjeta6.descripcion = "Eventos de lluvias torrenciales de baja intensidad se hacen comunes, estos generan ciertos contratiempos sobre la infraestructura y los flujos de materia y energía en las ciudades y áreas rurales.";
       this.tarjeta6.Costo = -1;
       this.tarjeta6.Bienestar = -1;
       this.tarjeta6.CantidadPob = 0;
       this.tarjeta6.titulomitigacion = "Brigadas de limpieza de alcantarillado";
       this.tarjeta6.descripcionmitigacion = "La empresa de aseo y alcantarillado asignada al ente territorial, junto a la comunidad, organizan una brigada de mantenimiento y recolección de residuos sólidos que obstruyen el flujo adecuado de las aguas lluvias en el casco urbano."
       this.tarjeta6.costomitigacion  = -1;
       this.tarjeta6.bienestarmitigacion = 1;
       this.tarjeta6.cantidadpobmitigacion = 0;
       this.tarjetasDyP.push(this.tarjeta6);

       this.tarjeta7.id = "7";
       this.tarjeta7.titulo = "Investigación en Enfermedades Infecciosas Emergentes";
       this.tarjeta7.descripcion = "La investigación en tópicos selectos, que se encuentre en la frontera del conocimiento permite diseñar alternativas de manejo para ciertas amenazas de naturaleza biológica. Entre estas Virus, Bacterias, Resistencia Bacteriana, Vacunación entre otros.";
       this.tarjeta7.Costo = -6;
       this.tarjeta7.Bienestar = 7;
       this.tarjeta7.CantidadPob = 5;
       this.tarjetasDyP.push(this.tarjeta7);

       this.tarjeta8.id = "8";
       this.tarjeta8.titulo = "Pérdida de productos agrícolas";
       this.tarjeta8.descripcion = "La deficiencia en la implementación de sistemas de riego eficientes, monitoreo climático inexistente, acceso limitado al mercado financiero y de seguros para cosechas y equipos, son la receta para generar problemas en la matriz productiva agroindustrial.";
       this.tarjeta8.Costo = -1;
       this.tarjeta8.Bienestar = -2;
       this.tarjeta8.CantidadPob = -3;
       this.tarjeta8.titulomitigacion = "Sistemas y protocolos de atención a desastres tipo B";
       this.tarjeta8.descripcionmitigacion = "Activando este sistema de reacción a eventos catastróficos podrás proteger a la población afectada por la catástrofe. Sin embargo, al ser una medida reactiva es una solución con costos económicos elevados y con alta probabilidad de corrupción local, típica en países latinoamericanos."
       this.tarjeta8.costomitigacion  = -3;
       this.tarjeta8.bienestarmitigacion = 1;
       this.tarjeta8.cantidadpobmitigacion = 3;
       this.tarjetasDyP.push(this.tarjeta8);

       this.tarjeta9.id = "9";
       this.tarjeta9.titulo = "Incendio forestal I";
       this.tarjeta9.descripcion = "Periodos de irradiación solar intensa y turistas pobremente gestionados a través de ecosistemas estratégicos del territorio, son típicamente puntos de origen de este tipo de desastres.";
       this.tarjeta9.Costo = -4;
       this.tarjeta9.Bienestar = -2;
       this.tarjeta9.CantidadPob = -2;
       this.tarjeta9.titulomitigacion = "Sistemas y protocolos de atención a desastres tipo D";
       this.tarjeta9.descripcionmitigacion = "Activando este sistema de reacción a eventos catastróficos podrás proteger a la población afectada por la catástrofe. Sin embargo, al ser una medida reactiva es una solución con costos económicos elevados y con alta probabilidad de corrupción local, típica en países latinoamericanos."
       this.tarjeta9.costomitigacion  = -3;
       this.tarjeta9.bienestarmitigacion = 1;
       this.tarjeta9.cantidadpobmitigacion = 2;
       this.tarjetasDyP.push(this.tarjeta9);

       this.tarjeta10.id = "10";
       this.tarjeta10.titulo = "Investigación en enfermedades infecciosas";
       this.tarjeta10.descripcion = "La investigación en tópicos selectos, que se encuentre en la frontera del conocimiento permite diseñar alternativas de manejo para ciertas amenazas de naturaleza biológica. Entre estas Virus, Bacterias, Resistencia Bacteriana, Vacunación entre otros.";
       this.tarjeta10.Costo = -6;
       this.tarjeta10.Bienestar = 7;
       this.tarjeta10.CantidadPob = 5;
       this.tarjetasDyP.push(this.tarjeta10);
     }

llenarUsuarioIconos(){
  this.usuario1.id = "1";
  this.usuario1.nombre = "ImNotLeandro";
  this.usuario1.costo = 100000;
  this.usuario1.bienestar = 90;
  this.usuario1.CantidadPob = 80;
}

restarvariables(){
  this.usuario1.costo = this.usuario1.costo + this.model.Costo;
  this.usuario1.bienestar = this.usuario1.bienestar + this.model.Bienestar;
  this.usuario1.CantidadPob = this.usuario1.CantidadPob + this.model.CantidadPob;

}
 }
