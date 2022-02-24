//diaz barbara 
//ejercicio 6 while 

function mostrar()
{
	let numero;
	let acumulador = 0;
	let promedio;
	let i = 0;

	while (i < 5){
		numero = parseInt(prompt("ingrese numero")); 
		acumulador = acum + numero; 
		i++ // es otra forma de escribir el i= i + 1
	}
	
	promedio = acum / 5; 

	document.getElementById("txtIdSuma").value = acum;
	document.getElementById("txtIdPromedio").value = promedio; 
}