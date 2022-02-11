//Diaz Barbara
//Ejercicio switch 4

function mostrar()
{
	let tomoElMes;
	tomoElMes= document.getElementById("txtIdMes").value; 

	switch(tomoElMes){
		case "Febrero":
			alert("Este mes tiene 28 días"); 
				break;

		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			alert("Este mes tiene 30 días"); 
				break;

		default: 
			alert("Este mes tiene 31 días"); 
	}
}