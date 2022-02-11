function mostrar()
{
	let ingresoEstacion;
	let ingresoDestino;
	ingresoEstacion= document.getElementById("txtIdEstacion").value;
	ingresoDestino= document.getElementById("txtIdDestino").value;
   
	switch (ingresoEstacion){
		case "Invierno":
			switch (ingresoDestino){
				case "Bariloche":
					alert("Se viaja");
					break;
				default:
					alert("No se viaja"); 
			}
		case "Verano":
			switch (ingresoDestino){
				case "Mar del plata":
				case "Cataratas":
					alert("Se viaja");
					break;
				default:
					alert("No se viaja"); 
			}	
		case "Primavera":
			switch(ingresoDestino){
				case "Bariloche": 
					alert ("No se viaja");
					break;
				default:
					alert("Se viaja");
			}
		case "Otoño": 
			switch (ingresoDestino){
				case "Bariloche":
				case "Cataratas":
				case "Cordoba":
				case "Mar del plata":
					alert("Se viaja"); 
			}
	}
}