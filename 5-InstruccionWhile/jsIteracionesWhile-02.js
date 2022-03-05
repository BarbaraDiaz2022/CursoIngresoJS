//diaz barbara 
//ejercicio while 2 
/*
al presionar el botón mostrar 10 repeticiones 
con números DESCENDENTES, desde el 10 al 1.*/
function mostrar()
{	/*
	let i = 10;
	
	while (i > 0){
		alert(i);
		i = i - 1;	  
	} */
	//Diaz Barbara 
	//Ejercicio extra en while 2
	/* Ingresar 5 números, y determinar la cantidad de números que son mayores que 10 y menores
	20 (inclusive en ambos casos)(VALIDAR) Mostrar por console.log*/
	/*let numero; 
	let i = 0; 

	do {
		numero = parseFloat(prompt("Ingrese 5 numeros"));
			while (isNaN(numero) == true){
				numero = parseFloat(prompt("Error. Ingrese solo numeros"));
			}
		i++; 
	}while(i < 5);  //esto funciona 

	if (numero >= 10 && numero <= 20){
		console.log("Los valores que ingresó estan entre 10 y 20"); 
	} */

	//Diaz Barbara
	/* En WHILE 2. Pedir Números al usuario hasta que él quiera,
	contar los números que son menores a – 15 y mayores a 100 (inclusive ambos casos)(VALIDAR). 
	Mostrar por console.log: a) el promedio de los números que cumplen la condición b) cantidad
	de números positivos c) cantidad de números negativos d) cantidad de números impares.
	let numero;
	let respuesta; 
	let acumuladorNegativos;
	let acumuladorPositivos;
	let contadorNegativos;
	let contadorPositivos; 
	let contadorImpares; 
	let promedioNegativos;
	let promedioPositivos; 

	do{
		numero = parseInt(prompt("Ingrese un numero entre -15 y 100"));

		while (isNaN(numero == true) || numero >= -15  || numero <= 100){
			numero = parsInt(prompt("Error. Ingrese solo numeros dentro del rango pedido")); 
		}

		if (numero < 0){ // menor a 0 
			acumuladorNegativos = acumuladorNegativos + numero; 
			contadorNegativos++;
		}
		else {  
			acumuladorPositivos = acumuladorPositivos + numero; 
			contadorPositivos++; 
		}

		if (numero%2 != 0){
			contadorImpares++; 
		}

		respuesta = prompt("Desea seguir ingresando numeros? Indique 'si' o 'no'"); 
	}while (respuesta == "si");
	
	promedioNegativos = acumuladorNegativos / contadorNegativos;
	promedioPositivos = acumuladorPositivos / contadorPositivos; 
	
	console.log("El promedio de los numeros negativos es " + promedioNegativos);
	console.log("El promedio de los numeros positivos es " + promedioPositivos); 
	console.log("La cantidad de numeros positivos ingresados es " + contadorPositivos);
	console.log("La cantidad de numeros negativos ingresados es " + contadorNegativos);
	console.log("La cantidad de numeros impares ingresados es " + contadorImpares); */

	//diaz barbara 
	//extra 
	/*En WHILE 2. Pedir nombre y temperatura hasta que el usuario quiera, mostrar mensaje:
	 " Usted se llama XXX y tiene la temperatura (NORMAL, BAJA, ALTA DEBE AISLARSE)"
	 (VALIDAR que sean numeros y los rangos de las temperaturas).*/
	 let nombre;
	 let temperatura;
	 let acumuladorNombre;
	 let acumuladorTemperaturaBaja = 0; 
	 let acumuladorTemperaturaNormal = 0;
	 let acumuladorTemperaturaAlta = 0; 
	 let nombreTemperaturaBaja;  
	 let nombreTemperaturaNormal; 
	 let nombreTemperaturaAlta; 
	 let respuesta; 
	 let mensaje1;
	 let mensaje2;
	 let mensaje3;  

	do {
		nombre = prompt("Ingrese su nombre");
		do {
			temperatura = parseFloat(prompt("Ingrese una temperatura valida"));
		}while (isNaN(temperatura)==true|| temperatura <33 || temperatura >44);
		
		if (temperatura>=35 && temperatura<=36.8){
			acumuladorTemperaturaNormal = acumuladorTemperaturaNormal + temperatura;
			nombreTemperaturaNormal = nombre;  
		}
		else if (temperatura<35){
			acumuladorTemperaturaBaja = temperatura; 
			nombreTemperaturaBaja = nombre; 
		}
		else {
			acumuladorTemperaturaAlta = temperatura;
			nombreTemperaturaAlta = nombre; 
		}

		respuesta = prompt("Desea seguir ingresando datos?Indique s/n"); 
	}while(respuesta == "s");
	
	mensaje1 = "Usted se llama "+nombreTemperaturaNormal+" y tiene temperatura normal";
	mensaje2 = "Usted se llama "+nombreTemperaturaBaja+" y tiene temperatura baja";
	mensaje3 = "Usted se llama "+nombreTemperaturaAlta+" y tiene temperatura alta.Debe aislarse"; 
	alert(mensaje1);
	alert(mensaje2);
	alert(mensaje3);

}