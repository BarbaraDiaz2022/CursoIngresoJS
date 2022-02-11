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

}