//Diaz Barbara
//Switch 2 

function mostrar()
{
	let tomoElMes; 
	tomoElMes= document.getElementById("txtIdMes").value;

	switch(tomoElMes){
		case "Julio":	
		case "Agosto":
			alert("Abrigate que hace frío");
			break; 

		case "Septiembre":	 
		case "Octubre": 
		case "Noviembre":
		case "Diciembre":
			alert("Ya pasamos el frío, ahora calor!"); 
			break;

		default:
			alert("Falta para el invierno"); 
	}
}