//Diaz Barbara 
//Ejercicio 6 switch

function mostrar()
{
	let ingresoHora;
	ingresoHora=parseInt(document.getElementById("txtIdHora").value);

	switch(ingresoHora){
		case 7:
		case 8:
		case 9:
		case 10:
		case 11: 
			alert("Es de mañana");
			break; 
		
	}
}