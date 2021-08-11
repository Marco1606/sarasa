function mostrar() 

{
  let nombre;
  let tipo;
  let sangre;
  let edad;
  let sexo;
  let seguir;
  let promEdadReptil = 0;
	let acumEdadReptil = 0;
	let contReptil = 0;
  let edadMascotaJoven;
	let tipoMascotaJoven;
	let sexoMascotaJoven;
	let flagMascota = 1;
  let contMacotas = 0;
	let contAves = 0;
	let porcAves = 0;
  let acumAves = 0;
  let acumMamifero = 0;
  let acumReptil = 0;
  let tipoMax;
  let cantMaxTipo;



  do{

    nombre = prompt("Ingrese nombre de su mascota: ");
    while(nombre < 0 && nombre > 8){
      nombre = prompt("nombre incorrecto. reingrese nombre: ");
    }

    tipo = prompt("Ingrese tipo (mamifero/ave/reptil): ");
    while( tipo != "mamifero" && tipo != "ave" && tipo != "reptil" ){
      tipo = prompt("Tipo invalido. Reingrese tipo (mamifero/ave/reptil): ");
    }

    if( tipo == "reptil"){
			sangre = "fria";
		} else{
			sangre = prompt("ingrese tipo de sangre (fria/calida) ");
			while(!(sangre == "fria" || sangre == "calida")){
				sangre = prompt("tipo de sangre incorrecta. reingrese sangre: "); 
			}
		}

    edad = parseInt(prompt("ingrese su edad: "));
		while( isNaN(edad) || edad < 0 ){
			edad = parseInt(prompt("edad incorrecta. reingrese su edad: "));
		}

    sexo = prompt("ingrese su sexo: (m/h) ");
		while(!(sexo == 'h' || sexo == 'm' )){
			sexo = prompt("sexo incorrecto. reingrese sexo: ");
		}


    if( tipo == "reptil"){
			contReptil++;
			acumEdadReptil += edad;
		}

    if( flagMascota || edad < edadMascotaJoven ){
			edadMascotaJoven = edad;
			tipoMascotaJoven = tipo;
			sexoMascotaJoven = sexo;
			flagMascota = 0;
    }
    
    contMacotas++;

    if(tipo == "aves"){
			contAves++;
		}

    if(tipo == "aves"){
      acumAves += tipo;
    }
     else if( tipo == "mamifero"){
       acumMamifero += tipo;
     }
     else{
       acumReptil += tipo;
     }



    seguir = prompt("quiere ingresar otro animal?: ");
  }   while( seguir == 's');



  if(contReptil != 0){
		promEdadReptil = acumEdadReptil / contReptil;
	}
	document.write("a) el promedio de edad de los reptiles es " + promEdadReptil + "<br>");


  if(flagMujer){
    document.write("b) la menor mascota tiene" + edadMascotaJoven + " años, su tipo es " + tipoMascotaJoven + " y su sexo es " + sexoMacotaJoven + "<br>" ); 
  }

  porcAves = contAves * 100 / contMacotas;
	document.write("c) el pocentaje de aves es " + porcAves + "<br>");

  if(acumAves > acumMamifero && acumAves > acumReptil ){
    tipoMax = "aves";
    cantMaxTipo = acumAves;
  }
  else if(acumMamifero >= acumAves && acumMamifero > acumReptil){
    tipoMax = "mamifero";
    cantMaxTipo = acumMamifero;
  }
  else{
    tipoMax = "reptil";
    cantMaxTipo = acumReptil;
  }

  document.write(" c) el tipo de mascota con mas cantidad es " + tipoMax + " con " + cantMaxTipo + "<br>");



  























}
