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
	
	/*En WHILE 10. La universidad le pide ingresar: edad y nombre de los alumnos, informar el 
	nombre de la persona más vieja y la más joven por document.write(Validar que sean números y
	rango de edad).*/
	let edad;
	let nombre; 
	let edadMasVieja;
	let edadMasJoven;
	let acumuladorEdadMasVieja = 0;
	let acumuladorEdadMasJoven = 0; 
	let respuesta; 
	let bandera = 0; 
	let mensaje; 

	do {
		nombre = prompt("Ingrese su nombre"); 
		edad = parseInt(prompt("Ingrese su edad"));

		while (isNaN(edad == true) || edad < 17 || edad > 85){
			edad = parseInt(prompt("Error. Ingrese una edad valida"));
		}

		if (edad > edadMasVieja || bandera == 0){
			acumuladorEdadMasVieja = edad; 
		}
		if (edad <edadMasJoven || bandera == 0){
			acumuladorEdadMasJoven = edad; 
			bandera == 1; 
		}

		respuesta = prompt("Desea seguir ingresando? Indique 'si'/'no'"); 
	}while (respuesta == "si"); 

	//mensaje = nombre + " de "+ acumuladorEdadMasJoven + " años es la persona mas joven"; 
	//mensaje = nombre + " de " + acumuladorEdadMasVieja + " años es la persona mas vieja"; 
	alert(mensaje);
}
