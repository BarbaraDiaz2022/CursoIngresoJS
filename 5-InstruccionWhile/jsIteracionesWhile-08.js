// barbara diaz 
//ejercicio 8 while 
/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let numero; 
	let respuesta;
	let acumuladorSuma = 0;
	let acumuladorProducto= 1;  

	numero = parseFloat(prompt("Ingrese un numero")); 

	while (isNaN(numero) == true){
		numero = parseFloat(prompt("Error.Ingrese solo numeros"));
	} 
	
	while (respuesta == "si"){
		numero = parseFloat(prompt("Ingrese un numero")); 
		
		while (isNan(numero) == true){
			numero = parseFloat(prompt("Error.Ingrese un numero")); 
		}
		if (numero > 0){
			acumuladorSuma = acumuladorSuma + numero; 
		}
		else {
			acumuladorProducto = acumuladorProducto * numero; 
		}
	}
		/*
	do { 
		numero = parseFloat(prompt("Ingrese un numero")); 
		while (isNaN(numero) == true){
			numero = parseFloat(prompt("Error. Ingrese solo numeros"));
		}
		
		if (numero > 0){
			acumuladorSuma = acumuladorSuma + numero; 
		}
			else {
			acumuladorProducto = acumuladorProducto * numero; 
			}
		respuesta = prompt("Desea seguir ingresando numeros? Indique 'si' o 'no'"); 
	}while (respuesta == "si");

	document.getElementById("txtIdSuma").value = acumuladorSuma; 
	document.getElementById("txtIdProducto").value = acumuladorProducto; 
	*/
}