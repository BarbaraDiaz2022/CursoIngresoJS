/* Barbara Diaz 
Ejercicio 2 */

/*

Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/

function mostrar()
{ /*para declarar variables se usa la palabra reservada let en minuscula 
	*/
	
	let nombre;

	/* asignacion, asignacion es una accion que represento
	con el igual que indica que todo 
	lo que esta a la derecha del igual va a parar a la izquierda
	en este caso el prompt del usuario se guarda en la variable nombre*/ 

       nombre = prompt ("Ingrese su nombre");

	alert(nombre);

	/* todo lo que pongo entre comillas en alert se muestra literal, para
	mostrar lo que quiero ver en el contenido de la variable saco las 
	comillas y pongo lo que esta en la asignacion entre parentesis

	el alert solo muestra, el prompt ingresa 
	con el prompt lo pedimos nosotros al nombre del usuario */
	
}

