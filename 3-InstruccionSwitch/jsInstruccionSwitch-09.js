function mostrar()
{
	let ingresoEstacion;
	let ingresoLocalidad;
	let aumento= 0; //inicializar la variable es igualarla a =0, pero hay que tener en cuenta para que se usa la variable (puede inicializarse en 1 o -1 segun se requiera)
	let descuento= 0; 
	let precioFinal; 
	ingresoEstacion= document.getElementById("txtIdEstacion").value;
	ingresoLocalidad= document.getElementById("txtIdDestino").value; 
	const PRECIOBASE= 15000;

	switch (ingresoEstacion){
			case "Invierno": 
				if (ingresoLocalidad == "Bariloche"){
					aumento = 20;
				}
				else if (ingresoLocalidad == "Mar del plata"){
					descuento = 20;
				}
				else {
					descuento = 10;
				}
			break; 
			case "Verano": 
				if (ingresoEstacion == "Bariloche"){
					descuento = 20;
				}
				else if (ingresoLocalidad == "Mar del plata"){
					aumento = 20; 
				}
				else {
					aumento = 10; 
				}
			break;
			case "Primavera":
			case "Otoño":
				if (ingresoEstacion != "Cordoba") {
					aumento = 10; 
				}
			break; 
	}
	if (aumento != 0){
		precioFinal = PRECIOBASE + PRECIOBASE * aumento / 100; 
	}
	else if (descuento != 0 ){
		precioFinal = PRECIOBASE - PRECIOBASE * descuento / 100;
	}
	else {
		precioFinal = PRECIOBASE;
	}
	alert ("El precio final es " + precioFinal);
}