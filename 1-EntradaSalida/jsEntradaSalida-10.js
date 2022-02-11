/* Barbara Diaz
Ejercicio 10 

Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{  /*
	//declaro variables
	let sueldo;
	let sueldoDescontado;
	let descuento; 

	//asigno valor 
	sueldo= parseInt(document.getElementById("txtIdImporte").value); 

	//descuento del sueldo
	descuento= sueldo * 0.25; 

	//sueldo con descuento aplicado 
	sueldoDescontado= sueldo - descuento;

	//lo muestro en la caja de texto 
	document.getElementById("txtIdResultado").value = sueldoDescontado; 
*/
	//Diaz Barbara, ejercicio 10 Bis 1
	//NUEVO EJERCICIO 
	/*E/S 10Bis1: Debemos lograr tomar el importe por ID. Transformarlo a entero (parseInt), 
	luego pedirle al usuario un % de descuento (USTEDES RESUELVEN COMO LE PIDEN EL NUMERO) y 
	mostrar el importe en el cuadro de texto "RESULTADO" 

	let ingresoImporte;
	let pidoDescuento;
	let calculoDescuento;
	let aplicoDescuento;
	let importeAMostrar;

	ingresoImporte= parseFloat(document.getElementById("txtIdImporte").value);
	pidoDescuento= prompt("Ingrese descuento");
	calculoDescuento= ingresoImporte * (pidoDescuento / 100);
	aplicoDescuento= ingresoImporte - calculoDescuento; 
	importeAMostrar= aplicoDescuento
	document.getElementById("txtIdResultado").value = importeAMostrar; 
*/

//Diaz Barbara Ejercicio 10 Bis 2
/* E/S 10Bis2: se debe pedir el nombre del producto al usuario, el importe y tambien se debe
pedir el porcentaje de descuento al usuario, se debe: mostrar el importe final por ID y
 ademas mostrar el mensaje:  "Usted compro un XXXXXX con XX % de descuento, el precio final es 
 XXXX"*/

 let ingresoNombreDelProducto;
 let ingresoPrecioDelProducto;
 let ingresoPorcentajeDeDescuento;
 let calculoDescuento;
 let aplicoDescuento;
 let importeAMostrar;
 let mensaje; 

 ingresoNombreDelProducto= prompt("Ingrese nombre del producto");
 ingresoPrecioDelProducto= parseFloat(document.getElementById("txtIdImporte").value);

 ingresoPorcentajeDeDescuento= prompt("Ingrese porcentaje de descuento");
 calculoDescuento= ingresoPrecioDelProducto * (ingresoPorcentajeDeDescuento / 100);
 aplicoDescuento= ingresoPrecioDelProducto - calculoDescuento;
 importeAMostrar= aplicoDescuento;
 document.getElementById("txtIdResultado").value = importeAMostrar;
 mensaje= "Usted compró un " + ingresoNombreDelProducto + " con " + ingresoPorcentajeDeDescuento + " de descuento "
 + " el precio final es " + importeAMostrar;
 alert(mensaje);

}
