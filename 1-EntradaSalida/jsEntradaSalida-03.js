/* Barbara Diaz 
Ejercicio 3 


Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{ /*txtIdNombre */

	let nombreIngresado;

	nombreIngresado= document.getElementById("txtIdNombre").value ; 
	
	alert(nombreIngresado);

}






/* para declarar variable se usa let, pero si para un ejercicio se pide
usar var se tiene que usar var, son diferentes formas de declarar
variables 
var declara variables globales es decir de funciones que 
estan fueras de las llaves, 
let declara variables locales o sea la funcion especifica que encierran 
las llaves

como el alert muestra literalmente, saque las comillas e ingrese la 
orden para que muestre lo que se guarda en la asignacion que es el 
nombre ingresado que solicita */

