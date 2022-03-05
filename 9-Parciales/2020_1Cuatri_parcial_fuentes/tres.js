//diaz barbara 
//ejercicio 3 parcial 2020

/* Bienvenidos.
En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil
("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.*/

function mostrar()
{	
	//declaro variables 
	let nombre;
	let edad;
	let sexo;
	let estadoCivil; 
	let temperatura;
	let respuesta; 
	let tempMax = 32; 
	let nombreTempMax; 
	let contadorMayoresViudos = 0; 
	let contadorHombSolteros = 0; 
	let contadorHombViudos = 0; 
	let contadorMayoresTemp = 0; 
	let acumHombresSolteros = 0;
	let promedio; 
	
		do {
			nombre = prompt("Ingrese su nombre");
			do {
				edad = parseInt(prompt("Ingrese la edad")); 
			}while(isNaN(edad)==true || edad <0 || edad >103);
			do {
				sexo = prompt("Ingrese sexo.Indique f/m");
			}while (sexo != "f" && sexo!= "m");
			do {
				temperatura = parseFloat(prompt("Ingrese una temperatura valida"));
			}while (isNaN(temperatura)==true|| temperatura <33 || temperatura >44);
			do {
				estadoCivil = prompt("Ingrese su estado civil. Indique soltero/casado/viudo");
			}while(estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil !="viudo"); //funciona
			//punto a 
			if (temperatura > tempMax){
				tempMax = temperatura;
				nombreTempMax = nombre; 
			}
			//punto b
			if (edad >= 18 && estadoCivil == "viudo"){
				contadorMayoresViudos ++;
			}
			//punto c 
			if (sexo == "m" && estadoCivil == "soltero"){
				acumHombresSolteros = acumHombresSolteros + edad; //para el promedio del punto e
				contadorHombSolteros++; 
			}
			else if (sexo == "m" && estadoCivil == "viudo"){
				contadorHombViudos++; 
			}
			//punto d 
			if (edad >60 && temperatura > 38){
				contadorMayoresTemp++; 
			}

			respuesta = prompt ("Desea seguir ingresando datos? indique s/n"); 
		}while (respuesta == "s");
		//punto e 
		promedio = acumHombresSolteros / contadorHombSolteros; 

		document.write("la persona con mas temperatura es "+nombreTempMax+"<br>"); 
		document.write("la cantidad de mayores viudos es "+contadorMayoresViudos); 
		document.write("la cantidad de hombres solteros es "+contadorHombSolteros+" y la cantidad de hombres viudos es "+contadorHombViudos+"<br>"); 
		document.write("la cantidad de personas de la tercera edad con mas de 38 de temperatura es "+contadorMayoresTemp+"<br>"); 
		document.write("el promedio de edad entre los mayores solteros es "+promedio+"<br>"); 
}


