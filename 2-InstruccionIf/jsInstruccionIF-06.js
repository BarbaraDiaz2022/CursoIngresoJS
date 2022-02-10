//Diaz Barbara 
//Ejercicio If 6

function mostrar()
{
	//tomo la edad  
	let edad;
	edad = parseInt(document.getElementById("txtIdEdad").value); 

	if ( edad >= 18){
		alert("Usted es mayor de edad"); 
	}
	else { 
		if ( edad <= 12){
			alert("Usted es un niño");
		}
		else {
			alert("Usted es adolescente"); 
		}

	}

}

/*if ( edad >= 13 && edad <=17){
		alert("Usted es adolescente");
	}

	if ( edad <=12){
		alert("Usted es menor de edad"); 
	}
	*/