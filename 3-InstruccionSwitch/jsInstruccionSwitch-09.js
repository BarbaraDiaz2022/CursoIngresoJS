function mostrar()
{
	let ingresoEstacion;
	let ingresoLocalidad;
	let aumento;
	let descuento; 
	let precioFinal;
	ingresoEstacion= document.getElementById("txtIdEstacion").value;
	ingresoLocalidad= document.getElementById("txtIdDestino").value; 
	const PRECIOBASE= 15000;

	switch (ingresoEstacion){
		case "Invierno":
			switch (ingresoLocalidad){
				case "Bariloche":
					aumento= PRECIOBASE * (20/100); 
					precioFinal= PRECIOBASE + aumento; 
					alert("Su tarifa es " + precioFinal); 
					break;
				case "Cataratas": 
				case "Cordoba": 
					descuento= PRECIOBASE * (10/100);
					precioFinal= PRECIOBASE - descuento; 
					alert("Su tarifa es " + precioFinal); 
					break;
				case "Mar del plata": 
					descuento= PRECIOBASE * (20/100);
					precioFinal= PRECIOBASE - descuento;
					alert("Su tarifa es " + precioFinal);
					break; 
			}	
		case "Verano": 
			switch(ingresoLocalidad){
				case "Bariloche":
					descuento= PRECIOBASE * (20/100);
					precioFinal= PRECIOBASE - descuento;
					alert("Su tarifa es " + precioFinal);
					break;
				case "Cataratas":
				case "Cordoba":
					aumento= PRECIOBASE * (10/100);
					precioFinal= PRECIOBASE + aumento;
					alert("Su tarifa es " + precioFinal);
					break;
				case "Mar del plata": 
					aumento= PRECIOBASE * (20/100); 
					precioFinal= PRECIOBASE + aumento; 
					alert("Su tarifa es " + precioFinal);
					break;	
			}
		case "Primavera":
		case "Otoño": 
			switch(ingresoLocalidad){
				case "Cataratas":
				case "Mar del plata":
				case "Bariloche": 
					aumento= PRECIOBASE * (10/100);
					precioFinal= PRECIOBASE + aumento;
					alert("Su tarifa es " + precioFinal);
					break;
				default:
					alert("Su tarifa es " + PRECIOBASE); 
				
			}	
	}
}