/*
Diaz Barbara 
ejercicio 10 while
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar: //esto ya está
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{	/*
	let numero; 
	let respuesta; 
	let contadorDePositivos = 0;
	let contadorDeNegativos = 0;
	let contadorDeCeros = 0;
	let contadorDePares = 0; 
	let acumuladorPositivos = 0;
	let acumuladorNegativos = 0;  
	let promedioDePositivos;
	let promedioDeNegativos; 
	let diferencia; 
	
	do {
		numero = parseInt(prompt("Ingrese numero"));

		while (isNaN(numero) == true){
			numero = parseInt(prompt("Error. Ingrese solo numeros"));
		}

		if (numero > 0){ //mayores a 0
			acumuladorPositivos = acumuladorPositivos + numero; 
			contadorDePositivos ++; 
		}
		else if (numero == 0){
			contadorDeCeros ++; 
		}
		else {
			acumuladorNegativos = acumuladorNegativos + numero;
			contadorDeNegativos ++;
		}

		if (numero%2 == 0){
			contadorDePares++; 
		}

		respuesta = prompt ("Desea ingresar otro? Indique 'si' o 'no'"); 
	}while (respuesta == "si"); //el bucle funciona 

	promedioDePositivos = acumuladorPositivos / contadorDePositivos;
	promedioDeNegativos = acumuladorNegativos / contadorDeNegativos; 
	diferencia = contadorDePositivos - contadorDeNegativos; 

	//mostrar todo por document.write 
	document.write("La suma de los positivos ingresados es " + acumuladorPositivos + "<br>"); 
	document.write("La suma de negativos ingresados es " + acumuladorNegativos + "<br>"); 
	document.write("La cantidad de positivos ingresados es " + contadorDePositivos + "<br>"); 
	document.write("La cantidad de negativos ingresados es " + contadorDeNegativos + "<br>"); 
	document.write("La cantidad de ceros ingresados es " + contadorDeCeros + "<br>"); 
	document.write("La cantidad de numeros pares ingresados es " + contadorDePares + "<br>"); 
	document.write("El promedio de los positivos ingresados es " + promedioDePositivos + "<br>");
	document.write("El promedio de los negativos ingresados es " + promedioDeNegativos + "<br>"); 
	document.write("La diferencia entre numeros positivos y negativos ingresados es " + diferencia);
	*/
	
	//diaz barbara

	/*En WHILE 10. La universidad le pide ingresar: edad y nombre de los alumnos, informar el 
	nombre de la persona más vieja y la más joven por document.write(Validar que sean números y
	rango de edad).*/ /*
	let edad;
	let nombre; 
	let edadMasVieja = 0;
	let edadMasJoven = 86;
	let nombreEdadMasVieja;
	let nombreEdadMasJoven; 
	let respuesta; 

	do {
		nombre = prompt("Ingrese su nombre"); 
		edad = parseInt(prompt("Ingrese su edad"));

		while (isNaN(edad == true) || edad < 17 || edad > 85){
			edad = parseInt(prompt("Error. Ingrese una edad valida"));
		}

		if (edad > edadMasVieja){
			edadMasVieja = edad; 
			nombreEdadMasVieja = nombre; 
		}
		if (edad < edadMasJoven){
			edadMasJoven = edad; 
			nombreEdadMasJoven = nombre; 
		}

		respuesta = prompt("Desea seguir ingresando? Indique s/n"); 
	}while (respuesta == "s"); 

	document.write("La persona mas joven de la facultad es "+nombreEdadMasJoven+"<br>"); 
	document.write("La persona mas vieja de la facultad es "+nombreEdadMasVieja); */

	//diaz barbara

	/*En WHILE 10. Al presionar el botón pedir números hasta que el usuario quiera, mostrar por document.write:
	 el número máximo y el número mínimo ingresado, el menor de los pares y el mayor de los negativos ...solo si hay)*/ 
	
	let numero; 
	let numeroMin=0;
	let numeroMax=0; 
	let respuesta; 
	let bandera = 0;
	let menorDeLosPares = 0; 
	let mayorDeLosNegativos = 0; 

		do{
			do{
				numero  = parseFloat(prompt("Ingrese solo numeros"));
			}while(isNaN(numero)==true);

			if (bandera=0){
				numeroMax = numero;
				numeroMin = numero; 
				bandera = 1; //reseteo la bandera para que en la prox vuelta no entre de nuevo
			}
			//guardo el max
			if (numero > numeroMax){
				numeroMax = numero; 
			}
			//busco el mayor de los negativos
			if (numeroMax < 0){
				mayorDeLosNegativos = numeroMax; 
			}
			//guardo el min
			if (numero < numeroMin){
				numeroMin = numero; 
			}
			//el menor de los pares
			if (numeroMin%2==0){ 
				menorDeLosPares = numeroMin; 
			}

			respuesta = prompt("Desea seguir ingresando numeros?Indique s/n"); 
		}while(respuesta=="s");

		document.write("El numero maximo es "+numeroMax+"<br>");
		document.write("El numero minimo es "+numeroMin+"<br>");
		document.write("El menor numero de los pares es "+menorDeLosPares+"<br>");
		document.write("El mayor numero de los negativos es "+mayorDeLosNegativos+"<br>");
}
