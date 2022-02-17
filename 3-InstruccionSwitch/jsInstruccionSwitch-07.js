//Diaz Barbara 
//Ejercicio 7 switch 

function mostrar()
{
	let ingresoDestino;
	let mensaje; 
	ingresoDestino= document.getElementById("txtIdDestino").value;

	switch (ingresoDestino){
		case "Bariloche":
			mensaje = "Se encuentra en el oeste de nuestro país";
			break;
		case "Ushuaia":
			mensaje = "Se encuentra en el sur de nuestro país";
			break; 
		default:
			mensaje = "Se encuentra en el este de nuestro país";
			break; 
		}
		alert (mensaje);
}