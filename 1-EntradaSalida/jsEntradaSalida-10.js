/* Barbara Diaz
Ejercicio 10 

Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	//declaro variables
	let sueldo;
	let sueldoDescontado;
	let descuento; 

	//asigno valor 
	sueldo= parseInt(document.getElementById("txtIdImporte").value); 

	//descuento del sueldo
	descuento= sueldo * 0.25; 

	//sueldo con descuento aplicado 
	sueldoDescontado= sueldo - descuento;

	//lo muestro en la caja de texto 
	document.getElementById("txtIdResultado").value = sueldoDescontado; 
}
