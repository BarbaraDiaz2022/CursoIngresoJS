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
	 let acumuladorNombre;
	 let temperatura;
	 let respuesta; 

	 do {
		nombre = prompt("Ingrese su nombre");
		acumuladorNombre = nombre; 
		temperatura = parseFloat(prompt("Ingrese su temperatura")); 

		while (isNaN(temperatura == true) || temperatura < 33 || temperatura > 44){
			temperatura = parseFloat(prompt("Error.Ingrese una temperatura válida"));
		}//validacion funciona 

		if (temperatura >= 36.1 && temperatura <= 37.2) {
			mensaje = acumuladorNombre + " Temperatura normal"; 
			//console.log(mensaje); 
		} 	
		else if (temperatura > 37.2){
			mensaje = acumuladorNombre +" Temperatura alta. Debe aislarse."
			//console.log(mensaje); 
		} 
			else {
				mensaje = acumuladorNombre + " Temperatura baja"; 
				//console.log(mensaje); 
			}
		respuesta = prompt ("Desea seguir ingresando? Indique 'si' o 'no'");
	 }while (respuesta == "si");

}