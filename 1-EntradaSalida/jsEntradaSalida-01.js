/*Comentarios
Barbara Diaz
Ejercicio 1*/

//Al presionar el  botón, se debe mostrar un mensaje como el siguiente "Esto funciona de maravilla"
function mostrar()
{
/*	alert("Esto funciona de maravilla");

//Diaz Barbara
Se piden tres nombre de producto, y los precios de cada  producto ingresado, sacar el precio bruto 
(la suma de los tres sin impuestos), el promedio de los precios y el precio final total más iva (21%), 
pedir un porcentaje de descuento y aplicarlo al precio final, mostrar todos los datos calculados e ingresados por alert.
 (solo un alert en el código) 
	
	//declarar variables 

	//sacar precio bruto 
	//sacar el promedio de los precios 
	//precio final total mas iva %
	//pedir un porcentaje del descuento y aplicarlo al precio final 
	//mostrar los datos calculados e ingresados por alerta, solo una alerta
	//pedir datos por prompt 
*/
/*
	let ingresoNombre1; 
	let ingresoNombre2;
	let ingresoNombre3;
	let precio1;
	let precio2;
	let precio3;  
	let precioBruto; 
	let promedio;
	let precioMasIva;
	let precioFinal;  
	let porcentajeDescuento; 
	
	//asignar valores 
	ingresoNombre1= prompt("Ingrese nombre del producto");
	ingresoNombre2= prompt("Ingrese nombre del producto");
	ingresoNombre3= prompt("Ingreso nombre del producto"); 
	precio1= parseFloat(prompt("Ingrese precio de " + ingresoNombre1));
	precio2= parseFloat(prompt("Ingrese precio de " + ingresoNombre2)); 
	precio3= parseFloat(prompt("Ingreso precio de " + ingresoNombre3));
	porcentajeDescuento= parseFloat(prompt("Ingrese el descuento")); 

	precioBruto= precio1 + precio2 + precio3; 
	promedio= precioBruto / 3; 
	precioMasIva= (precioBruto * 0.21) + precioBruto;
	porcentajeDescuento= precioMasIva - (porcentajeDescuento * precioBruto / 100);
	precioFinal= precioMasIva + porcentajeDescuento;
	
	alert("El precio es " + precioFinal); 
*/
/*Supongamos que para un cometa se necesitan 25 cm para la interseccion AB y 10 para DC
La superficie de un romboide se saca con la formula (D1 * D2)/2 (siendo D diagonal uno en este caso AB y D2
	seria la diagonal dada por DC). Con esa formula sacamos la cantidad de papel necesario para el cometa, si queremos
	sacar la cantidad de papel total tenemos que multiplicar por un 10% adicional (usado para la cola).
	Para saber los metros de varillas necesarios para 10 cometas tenemos que multiplicar esos 25 cm y 10 cm por 10 (la
	respuesta va a estar dada en centimetros y para pasala a metros tenemos que multiplicar por 0.01 (que es la
	relacion entre centimetros y metros porque 1cm--->0.01 mts)*/
/*
	let pidoAB;
	let pidoDC; 
	let area; 
	let cantidadTotal;
	let cantidadDeVarilla; 
	let pasajeDeCmAMts; 
	
	pidoAB= prompt("Ingrese valor 1");
	pidoDC= prompt("Ingrese valor 2");
	area= (pidoAB * pidoDC) / 2; 
	cantidadTotal= area + (area * 10/100);
	alert("necesitará " + cantidadTotal + " de papel");

	cantidadDeVarilla= (pidoAB + pidoDC) * 10;
	pasajeDeCmAMts= cantidadDeVarilla * 0.01; 
	alert("necesitará " + pasajeDeCmAMts + " metros de plastico"); */

	/* para el triangulo bicolor necesito la mitad del papel total dividido 2 y sumado, cada
	mitad corresponde a un color */
	 let pidoAB;
	let pidoDC; 
	let area; 
	let cantidadTotal;
	let buscoCadaMitad;
	let cantidadDeVarilla; 
	let pasajeDeCmAMts; 
	
	pidoAB= prompt("Ingrese valor 1");
	pidoDC= prompt("Ingrese valor 2");
	area= (pidoAB * pidoDC) / 2; 
	cantidadTotal= area + (area * 10/100);
	buscoCadaMitad= cantidadTotal / 2;
	alert ("necesitará " + buscoCadaMitad + " de papel rosa y " + buscoCadaMitad + " de papel azul");

	cantidadDeVarilla= (pidoAB + pidoDC) * 10;
	pasajeDeCmAMts= cantidadDeVarilla * 0.01; 
	alert("necesitará " + pasajeDeCmAMts + " metros de plastico"); 	
}