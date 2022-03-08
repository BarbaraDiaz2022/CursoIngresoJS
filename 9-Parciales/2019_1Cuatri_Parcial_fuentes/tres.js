/* Bienvenidos.
Pedir por prompt el precio y el porcentaje de descuento, mostrar el precio final con descuento
por id.*/

function mostrar()
{
    let precio;
    let descuento; 
    let precioFinal; 

    precio = parseFloat(prompt("Ingrese el precio"));
    descuento = parseFloat(prompt("Ingrese el porcentaje de descuento")); 
    precioFinal = precio - (precio * descuento / 100); 
    mensaje = "el precio final con descuento es "+precioFinal;

    document.getElementById("elPrecioFinal").value = mensaje; 

}
