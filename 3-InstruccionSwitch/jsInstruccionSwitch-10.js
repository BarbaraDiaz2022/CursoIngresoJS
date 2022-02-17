function mostrar()
{
	let ingresoEstacion;
	let ingresoDestino;
	let mensaje = "no se viaja"; //inicializa la variable entonces cuando no entre al if siempre va a aparecer el "no se viaja"
	ingresoEstacion= document.getElementById("txtIdEstacion").value;
	ingresoDestino= document.getElementById("txtIdDestino").value;
   
	switch (ingresoEstacion){
		case "Invierno":
			if (ingresoDestino == "Bariloche"){
				mensaje = "Se viaja"; 
			}
		break; 
		case "Verano": 
			if (ingresoDestino == "Mar del plata" || ingresoDestino == "Cataratas"){
				mensaje = "Se viaja"
			}
		break; 
		case "Otoño":
			mensaje = "Se viaja";
			break;
		case "Primavera":
			if (ingresoDestino != "Bariloche"){
				mensaje = "Se viaja"
			}
	}
	alert (mensaje); 
}