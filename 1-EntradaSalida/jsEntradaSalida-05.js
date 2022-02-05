/*
Barbara Diaz 
Ejercicio 5

Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{
		let nombre;
        let edad;
		let mensajeMostrado; 

/* declarar las variables primero y despues asignarlas */


nombre=document.getElementById("txtIdNombre").value;
edad=document.getElementById("txtIdEdad").value;  

/*Concatenar (+)---string----------+variable+--string-----+variable+string--*/
mensajeMostrado= "usted se llama " + nombre + " y tiene " + edad + " años ";


	alert(mensajeMostrado);

	/* un string es un texto que lo muestra literal y es lo que esta en comillas
	lo de color amarillo es un int (o un integer que son numeros enteros)*/
}


