function mostrar() 
{
  let juguete;
  let origen;
  let precio;
  let seguir;
  let acumMuñeca = 0;
  let acumRC = 0;
  let acumPelota = 0;
  let tipoMaxJuguete;
  let cantMaxJuguete;
  let acumJuguetesImportados = 0;
  let contJuguetesImportados = 0;
  let promedio;
  let reucadacionTotal = 0;
  let flagRC = 1;
  let precioRpBarato;
  let recaudacionFinal;
  


  do{

    juguete = prompt("ingrese tipo de jueguete (muñeca/rompecabezas/pelota) ");
    while(!(juguete == "muñeca" || juguete == "rompecabezas" || juguete == "pelota")){
      juguete = prompt("juguete incorrecto. reingrese juguete: ");
    }

    origen = prompt("ingrese el origen (nacional/importado)");
    while(!(origen == "nacional" || origen == "importado")){
      origen = prompt("orifen incorrecto. reingrese origen: ");
    }

    precio = parseInt(prompt("ingrese precio (entre 1000 y 5000" ));
    while(precio < 1000 && precio > 5000){
      precio = parseInt(prompt("precio iincorrecto. reingrese precio: "));
    }

    if(juguete == "muñeca"){
      acumMuñeca += juguete;
    }
     else if( juguete == "rompecabezas"){
       acumRC += juguete;
     }
     else{
       acumPelota += juguete;
     }
     if(juguetes == "importado"){
      contJuguetesImportados++;
      acumJuguetesImportados += precio;
    }

    reucadacionTotal += precio;

    if(flagRC || precio < precioRpBarato && origen == "nacional"){
      precioRpBarato = precio;
      flagRC = 0;
    }

    recaudacionFinal = reucadacionTotal - (reucadacionTotal / 0.21);


    

    seguir = prompt("quiere ingresar otra venta? ")
  }while(seguir == 's');


  if(acumMuñeca > acumRC && acumMuñeca > acumPelota ){
    tipoMaxJuguete = "muñeca";
    cantMaxJuguete = acumMuñeca;
  }
  else if(acumRC >= acumPelota && acumRC > acumMuñeca){
    tipoMaxJuguete = "rompecabezas";
    cantMaxJuguete = acumRC;
  }
  else{
    tipoMaxJuguete = "pelota";
    cantMaxJuguete = acumPelota;
  }
  document.write("el tipo de juguete mas vendido es " + tipoMaxJuguete + "<br>");

  promedio = acumJuguetesImportados / contJuguetesImportados;
  document.write("el promedio de juguetes importados es " + promedio + "<br>");

  document.write("la recaudacion total es " + reucadacionTotal + "<br>");

  document.write("el precio del rompecabezas nacional mas barato es " + precioRpBarato + "<br>");

  document.write("la recudacion final es " + recaudacionFinal + "<br>");


  






  
  


























}
