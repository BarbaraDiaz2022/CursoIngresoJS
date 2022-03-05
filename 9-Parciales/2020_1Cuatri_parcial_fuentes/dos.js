//diaz barbara
//ejercicio 2 parcial 2020

/* Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion,
hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
c) Informar el tipo con mas cantidad de bolsas.
d) El tipo mas caro
Curso de ingreso UTN FRA*/
function mostrar()
{   
    let tipo;
    let cantidad; 
    let precio; 
    let respuesta; 
    let acumBolsasArena = 0;
    let precioArena; 
    let acumBolsasCal = 0;
    let precioCal; 
    let acumBolsasCemento = 0;
    let precioCemento; 
    let precioMax = 0;
    let bandera = 0;
    let tipoCantMax;
    let cantidadMax = 0;
    let tipoPrecioMax; 
    let precioTotal; 
    let precioTotalDesc;
    let descuento; 
     

    do {
        do{
			tipo = prompt("Ingrese el tipo entre arena, cal o cemento");
		}while(tipo!="arena"&&tipo!="cal"&&tipo!="cemento");
        do {
			cantidad = parseInt(prompt("Ingrese la cantidad de productos. Solo hasta 1000"));
		}while(isNaN(cantidad)==true || cantidad <0 || cantidad >1000); 
		do {
			precio = parseFloat(prompt("Ingrese el precio por bolsa"));
		}while(isNaN(precio)==true || precio <0 || precio >300); 

            switch (tipo){ //guardo el precio total de cada producto 
                case "arena":
                    acumBolsasArena = acumBolsasArena + cantidad; 
                    precioArena = precio * acumBolsasArena; 
                break; 
                case "cal":
                    acumBolsasCal = acumBolsasCal + cantidad; 
                    precioCal = precio * acumBolsasCal;
                break; 
                case "cemento":
                    acumBolsasCemento = acumBolsasCemento + cantidad;
                    precioCemento = precio * acumBolsasCemento; 
                break; 
            }

        if (cantidad > cantidadMax ||bandera==0){ //punto c
            cantidadMax = cantidad;
            tipoCantMax = tipo; 
        }
        if (precio > precioMax ||bandera == 0){ //punto d
            precioMax = precio;
            tipoPrecioMax = tipo; 
            bandera = 1; 
        }

    respuesta = prompt("Desea seguir ingresando? Indique s/n"); 
    }while(respuesta == "s");

    //punto a
    precioTotal = precioArena + precioCal + precioCemento; 

    //para el punto b  
    if (cantidad > 10){
        descuento = 15;
    }
    if (cantidad > 30){
        descuento = 25; 
    }

    precioTotalDesc = precioTotal - (precioTotal * descuento / 100); 

    document.write("El importe total a pagar es "+precioTotal +"<br>");
    document.write("El importa a pagar con descuento es "+precioTotalDesc +"<br>");
    document.write("El tipo con mas cantidad de bolsas es "+tipoCantMax+"<br>");
    document.write("El tipo mas caro es "+tipoPrecioMax+"<br>");

}
