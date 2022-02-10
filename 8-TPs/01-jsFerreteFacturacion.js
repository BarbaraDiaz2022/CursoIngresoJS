//Diaz Barbara 
//TP 1

/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{ 
    //determino las variables 
    let precioUno;
    let precioDos;
    let precioTres;
    let sumaDePrecios; 
    
    //agrego los valores
    precioUno= parseFloat(document.getElementById("txtIdPrecioUno").value); 
    precioDos= parseFloat(document.getElementById("txtIdPrecioDos").value);
    precioTres= parseFloat(document.getElementById("txtIdPrecioTres").value); 

    //hago la suma 
    sumaDePrecios= precioUno + precioDos + precioTres; 

    //muestro el resultado 

    alert("La suma da " + sumaDePrecios); 
	
}

function Promedio () 
{
    //determino las variables 
    let precioUno;
    let precioDos;
    let precioTres;
    let sumaDePrecios; 
    let promedio; 
    
    //le agrego los valores
    precioUno= parseFloat(document.getElementById("txtIdPrecioUno").value); 
    precioDos= parseFloat(document.getElementById("txtIdPrecioDos").value);
    precioTres= parseFloat(document.getElementById("txtIdPrecioTres").value); 

    //hago la suma de los precios ingresados
    sumaDePrecios = precioUno + precioDos + precioTres;

    //saco el promedio (la suma de los precios dividido la cantidad de los mismos)
    promedio= sumaDePrecios / 3; 

    //muestro el resultado 
	alert("El promedio es " + promedio); 
}

function PrecioFinal () 
{
    //declaro variables
    let precioUno;
    let precioDos;
    let precioTres;
    let sumaDePrecios; 
    let precioMasIva; 
    let precioFinal; 

    //le agrego los valores
    precioUno= parseFloat(document.getElementById("txtIdPrecioUno").value); 
    precioDos= parseFloat(document.getElementById("txtIdPrecioDos").value);
    precioTres= parseFloat(document.getElementById("txtIdPrecioTres").value); 

    //hago la suma de los precios ingresados
    sumaDePrecios = precioUno + precioDos + precioTres; 

    //agrego el iva a la suma de precios (el 21 %)
    precioMasIva= sumaDePrecios * 1.21; 

    //formo el precio final sumando el iva al resultado de los precios 
    precioFinal= sumaDePrecios + precioMasIva; 

    //muestro el resultado 
    alert("El precio final es " + precioFinal); 
    

    //tengo que usar el 1. y la cantidad de descuento por ej en este caso es 1.21 
}