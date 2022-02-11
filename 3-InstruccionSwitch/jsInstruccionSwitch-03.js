//Diaz Barbara
//Ejercicio switch 3 

function mostrar()
{
	let tomoElMes; 
	tomoElMes= document.getElementById("txtIdMes").value;

	switch(tomoElMes) {
		case "Febrero":
			alert("Este mes no tiene más de 29 días");
			break;

		default:
			alert("Este mes tiene 30 o más días");
	}	
}