function mostrar() 
{
  let carrera;
  let nombre;
  let sexo;
  let materias;
  let nota;
  let edad;
  let flagNota = 1;
  let maxNota;
  let nombreMaxNota;
  let edadAlumnaJoven;
	let sexoAlumnaJoven;
  let nombreAlumnaJoven;
	let flagAlumna = 1;
  let flagcarrera = 1;
  let nombreMaxCarrera;
  let edadMaxCarrera;




  for(let i=0; i < 500; i++){

    nombre = prompt("ingrese su nombre: ");

    carrera = prompt("ingrese su carrera: ");
    while(!(carrera == "quimica" || carrera == "fisica" || carrera == "sistemas")){
       carrera = prompt("carrera incorrecta. reingrese carrera: ");
    }

    sexo = prompt("ingrese su sexo: (f/m/no binario)");
		while(!( sexo == 'f' || sexo == 'm' || sexo == "no binario" )){
			sexo = prompt("sexo incorrecto. reingrese su sexo: ");
		}

    materias = parseInt(prompt("ingrese cantidad de materia (entre 1 y 5)"));
    while( isNaN(materias) || materias < 1 || materias > 5){
      materias = parseInt(prompt("cantidad incorrecta. reingrese cantidad: "));
    }

    nota = parseInt(prompt("ingresar nota: (entre 1 y 10"));
    while(isNaN(nota) || nota < 0 || nota > 10){
      nota = parseInt(prompt("nota incorrecta. reingrese nota: "));
    }

    edad = parseInt(prompt("ingrese su edad: "));
		while( isNaN(edad) || edad < 0 ){
			edad = parseInt(prompt("edad incorrecta. reingrese su edad: "));
		}

    contEstudiantes++; 

    if (carrera == "fisica" && (flag || nota < maxNota)) {
      nombreMaxNota = nombre;
      flag=0;
    }

   if( sexo == "f" && flagAlumna || edad < edadAlumnaJoven ){
    nombreAlumnaJoven = nombre;
    edadAlumnaJoven = edad;
    sexoAlumnaJoven = sexo;
    flagAlumna = 0;
  }

  if(flagcarrera || carrera != "quimica" && ){
    nombreMaxCarrera = nombre;
    edadMaxCarrera = edad;
    flagCarrera = 0;
  }
  

  if(flagNota){
   document.write("el nombre del mejor promedio de los alumnos de fisica es " + nombreMaxNota + " y su nota es " + maxNota + "<br>");
  }
 if(flagAlumna){
   document.write("el nombre de la alumna mas joven es " + nombreAlumnaJoven + "y su edad es" + edadAlumnaJoven + "<br>");
  }





  }


  














}
