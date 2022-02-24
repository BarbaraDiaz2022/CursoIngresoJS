//Diaz Barbara 
//Ejercicio 6 de switch con if 

function mostrar()
{
	let ingresoHora;
	let mensaje;
	ingresoHora=parseInt(document.getElementById("txtIdHora").value);

	if (ingresoHora >= 7 && ingresoHora <= 11){
		mensaje = "Es de mañana"; 
	}
	else if (ingresoHora >= 12 && ingresoHora <= 19){
		mensaje = "Es de tarde";
	}
	else if (ingresoHora >= 20 && ingresoHora <= 24){
		mensaje = "Es de noche";
	}
	else if (ingresoHora >= 0 && ingresoHora <= 6){
		mensaje = "Es de noche"; 
	}
	else {
		mensaje = "La hora no existe"; 
	}
	alert (mensaje); 
}