//Diaz Barbara
//Ejercicio If 3

function mostrar()
{
	//tomo la edad  
	let edad; 
	edad=parseInt(document.getElementById("txtIdEdad").value); 

	if ( edad >= 18) {
	alert ("Usted es mayor de edad");
	}

	if ( edad <= 17) {
	alert("Usted es menor de edad"); 
	}
}

/*se puede usar en este caso el else despues del primer if porque else es un complemento de if 
(es el conjunto de elementos que NO forman parte del if, no significa que sea lo contrario) */
/*se usa asi:

else {
	alert (el mensaje a mostrar);
} 
 */