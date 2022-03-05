/* Pedir por prompt el precio y el porcentaje de descuento, mostrar el precio final con descuent 
por id.*/
function mostrar()
{
    let precio; 
    let descuento; 
    let precioFinal; 

    do{ precio = parseFloat(prompt("Ingrese el precio del producto"));
    }while(isNaN(precio)==true||precio<0);
   
    do {
        descuento = parseInt(prompt("Ingrese el porcentaje de descuento")); 
    }while(isNaN(descuento)==true||descuento<0);

    precioFinal = precio - (precio * descuento / 100); 

    document.getElementById("elPrecioFinal").value = precioFinal; 



}
