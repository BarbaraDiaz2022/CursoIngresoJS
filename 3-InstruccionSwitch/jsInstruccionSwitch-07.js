//Diaz Barbara 
//Ejercicio 7 switch 

function mostrar()
{
	let ingresoDestino;
	ingresoDestino= document.getElementById("txtIdDestino").value;

	switch (ingresoDestino){
		case "Bariloche":
			alert("Se encuentra en el oeste de nuestro país");
			break;
		case "Ushuaia":
			alert("Se encuentra en el sur de nuestro país");
			break; 
		default:
			alert ("Se encuentra en el este de nuestro país");
	}
}