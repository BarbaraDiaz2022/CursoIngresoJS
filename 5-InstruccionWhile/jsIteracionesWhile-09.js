//diaz barbara 
//ejercicio 9 while 

/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	
	let numero; 
	let maximo;
	let minimo; 
	let respuesta;

	numero = parseFloat(prompt("Ingrese un numero"));

	while (isNaN(numero) == true){
		numero = parseFloat(prompt("Error.Ingrese solo numeros"));
	}

	maximo = numero; 
	minimo = numero; 
	respuesta = prompt("Desea seguir ingresando? Indique 'si' o 'no'")

	while (respuesta == "si"){
		numero = parseFloat(prompt("Ingrese numero")); 

		while (isNaN(numero) == true){
			numero = parseFloat(prompt("Error.Ingrese solo numeros"));
		}
		if (numero > maximo){
			maximo = numero;
		}
		else if (numero < minimo){
			minimo = numero;
		}
	respuesta = prompt("Ingresa otro? Indique 'si' o 'no'"); 
	}

	document.getElementById("txtIdMaximo").value = maximo; 
	document.getElementById("txtIdMinimo").value = minimo;
	
}