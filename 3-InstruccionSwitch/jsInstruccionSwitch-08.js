//Diaz Barbara
//Ejercicio 8 switch

function mostrar()
{
	let ingresoDestino;
	let mensaje;
	ingresoDestino= document.getElementById("txtIdDestino").value;
	/* 
	switch (ingresoDestino){
		case "Bariloche":
		case "Ushuaia":
			mensaje="Acá hace frío";
			break;
		default:
			mensaje="Acá hace calor";
	}
	alert (mensaje); */

	if (ingresoDestino == "Bariloche" || "Ushuaia"){
		mensaje = "Aca hace frio"; 
	}
		else {
		mensaje = "Aca hace calor"; 
		}
	alert(mensaje); 
}
