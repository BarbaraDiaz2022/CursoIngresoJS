//diaz barbara
//ejercicio 5
function mostrar()
{
	/*let i; 
	let numero;

	for (i = 0; ; i++){ //si ; ; en lugar de poner condicion crea un loop infinito
		
		numero = parseInt(prompt("Ingrese un numero"));

		if (numero == 9){
			break; 
		}
	}*/
	//diaz barbara 
/* En FOR 5, Realizar el programa que permita el ingreso de las notas (validar entre 0 y 10)
el sexo (validar el sexo “f” o “m”) de 7 alumnos, informar por alert: a) El promedio de las
notas totales. b) La nota más baja y el sexo de esa persona. c) La cantidad de varones que su
nota haya sido mayor o igual a 6.

	let i; 
	let nota;
	let sexo; 
	let acumuladorNotas=0; 
	let notaMin = 11; 
	let sexoNotaMin;
	let contVarones = 0; 
	let mensajeA;
	let mensajeB;
	let mensajeC; 

	for (i=0; i <7; i++){
		do {
			nota = parseInt(prompt("Ingrese su nota")); 
			acumuladorNotas = acumuladorNotas + nota; //para punto a 
		}while(isNaN(nota)==true || nota < 0 || nota > 10);
		do {
			sexo = prompt("Ingrese su sexo. Indique f/m");
		}while(sexo != "m" && sexo != "f"); 

		if (nota < notaMin){ //punto b
			notaMin = nota; 
			sexoNotaMin = sexo;
		}
		if (sexo == "m" && nota>6){ //punto c
			contVarones++;
		}
	}
		promedio = acumuladorNotas / 7; 

		mensajeA = "El promedio de las notas totales ingresadas es "+promedio.toFixed(2); 
		mensajeB = "La nota mas baja fue "+notaMin+" y el sexo de esa persona es "+sexoNotaMin;
		mensajeC = "La cantidad de varones con nota mayor a 6 es: "+contVarones; 

		alert(mensajeA);
		alert(mensajeB);
		alert(mensajeC);*/

	//diaz barbara
/* Realizar el programa que permita el ingreso de 5 botellas de gaseosa, con marca, los cm3
(validar: 1-250, 2- 500, 3-1500, 4-2000) , tipo de marca validar(“Marca Líder”, “Otra”), precio
(validar entre 100 y 500) e informar por alert: a) El promedio de precio de marca líder en 500cm3
y la cantidad. b) La botella más barata y su precio. c) La cantidad de tipo otra.*/

	let i;
	let marca;
	let cm3;
	let precio; 
	let precioPromedio;
	let acumPrecio = 0; 
	let contPrecioPromedio = 0; 
	let precioMin = 501; 
	let contBotellaOtra = 0; 
	let promedio; 

	for (i=0; i<5; i++){
		do {
			cm3 = parseInt(prompt("Ingrese los cm3 de la botella"))
		}while(isNaN(cm3)==true && cm3 != 250 && cm3!=500 && cm3!=1500 && cm3!=2000);
		do {
			marca = prompt("Ingrese marca. Indique si es marca lider/otra")
		}while(marca != "marca lider" && marca != "otra");
		do {
			precio = parseFloat(prompt("Ingrese el precio entre 100 y 500"));
		}while(isNaN(precio)==true || precio <100 || precio >500);

			if (marca== "marca lider" && cm3 == 500){ //punto a promedio de precio y cantidad 
				precioPromedio = acumPrecio + precio; 
				contPrecioPromedio++;
			}
			if(marca == "otra"){
				contBotellaOtra++; 
			}

			if (precio < precioMin){ //punto b
				precioMin = precio; 
			}
	}

		promedio = precioPromedio / contPrecioPromedio; 

		mensajeA = "El promedio de precio de marca líder en 500cm3 es "+promedio;
		mensajeB = "El precio de la botella mas barata es "+precioMin; 
		mensajeC = "La cantidad de botellas de la marca 'otra' es "+contBotellaOtra; 

		alert(mensajeA);
		alert(mensajeB);
		alert(mensajeC); 

}
