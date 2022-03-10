//diaz barbara
//ejercicio 1 parcial 2020
/*Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, mostrar el precio
c) Cuántas unidades de jabones hay en total
 */

function mostrar()
{	
	let i; 
	let tipo; 
	let precio; 
	let cantidad; 
	let marca; 
	let fabricante; 
	let precioMinAlcohol = 301;
	let cantidadAlcohol = 0;
	let fabricanteAlcohol; 
	let cantidadMax = 0;
	let tipoMaxCant;
	let precioMaxCant = 0; 
	let contadorJabon = 0; 

	for (i=0; i<5; i++){
		do{
			tipo = prompt("Ingrese el tipo entre barbijo, jabón o alcohol");
		}while(tipo!="barbijo"&&tipo!="jabón"&&tipo!="alcohol");
		do {
			precio = parseFloat(prompt("Ingrese el precio"));
		}while(isNaN(precio)==true || precio <100 || precio >300); 
		do {
			cantidad = parseInt(prompt("Ingrese la cantidad de productos. Solo hasta 1000"));
		}while(isNaN(cantidad)==true || cantidad <1 || cantidad >1000); 
		marca = prompt("Ingrese marca");
		fabricante = prompt("Ingrese fabricante"); 

		if (tipo == "alcohol" && precio < precioMinAlcohol){ //punto a 
			cantidadAlcohol = cantidad; 
			fabricanteAlcohol = fabricante;
		}
		if (cantidad > cantidadMax){ //punto b
			tipoMaxCant = tipo; 
			precioMaxCant = precio; 
		}
		if (tipo == "jabón"){ //punto c 
			contadorJabon = contadorJabon + cantidad; 
		}
	}
	document.write("La cantidad de unidades del alcohol mas barato es "+cantidadAlcohol+ " y el fabricante es "+fabricanteAlcohol +"<br>");
	document.write("El tipo con mas unidades fue "+tipoMaxCant+" y el precio fue "+precioMaxCant +"<br>");
	document.write("La cantidad de jabones ingresadas es "+contadorJabon +"<br>");

	/*
	Algunas validaciones que no cambian mucho (se pueden reutilizar) 
	do {
		numero = parseInt(prompt("Ingrese un numero"));
	}while(isNaN(numero)==true || numero < 0 || numero >50);

	do{
		nombre = prompt("Ingrese el nombre");
	}while(isNaN(nombre)==false);

	do {
		sexo = prompt("Indique el sexo: f/m");
	}while(sexo != "f" && sexo != "m");

	do {
		palabra = prompt("Indique una palabra: esto/algo/aquello");
	}while(isNaN(palabra)==false || palabra != "esto" || palabra !="algo" || palabra != "aquello");
	*/
}
