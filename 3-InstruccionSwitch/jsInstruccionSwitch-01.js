//Diaz Barbara
//Switch 1

function mostrar()
{
	let tomoElMes; 
	tomoElMes= document.getElementById("txtIdMes").value;

	switch(tomoElMes){
		case "Enero":
			alert("Que comiences bien el año!"); 
			break; 
		case "Marzo":
			alert("A clases!");
			break;
		case "Julio":
			alert("Se vienen las vacaciones");
			break;
		case "Diciembre":
			alert("Felices fiestas!");
			break; 
	}

}