//Diaz Barbara
//Ejercicio 8 switch

function mostrar()
{
	let ingresoDestino;
	ingresoDestino= document.getElementById("txtIdDestino").value;

	switch (ingresoDestino){
		case "Bariloche":
		case "Ushuaia":
			alert ("Acá hace frío");
			break;
		default:
			alert("Acá hace calor");
	}
}