//diaz barbara
//ejercicio 9 parcial 2018
/* Bienvenidos.
Realizar el algoritmo que permita ingresar la marca del producto, el peso el cual debe ser entre
1 y 100 (validar),la temperatura de almacenamiento(entre -30 y 30) hasta que el usuario quiera 
e informar al terminar el ingreso por document.write:
a) La cantidad de temperaturas pares.
b) La marca del producto más pesado
c) La cantidad de productos que se conservan a menos de 0 grados.
d) El promedio del peso de todos los productos.
f) El peso máximo y el mínimo.*/
function mostrar()
{
    let marcaProducto;
    let pesoProducto; 
    let temperaturaAlmacenamiento; 
    let respuesta; 
    let acumuladorTempPar = 0;
    let productoMasPesado = 0;
    let marcaProdMasPesado; 
    let bandera = 0;
    let contadorProductos = 0; 
    let acumPeso = 0; 
    let contPeso = 0; 
    let promedioPeso; 
    let bandera2 = 0; 
    let pesoMin = 0; 

        do{
            marcaProducto = prompt("Ingrese la marca del producto"); 
            do {
                pesoProducto = parseFloat(prompt("Ingrese el peso del producto entre 1 y 100")); 
                acumPeso = acumPeso + pesoProducto; //para el promedio 
                contPeso++; 
            }while(isNaN(pesoProducto)==true || pesoProducto < 1 || pesoProducto >100);
            do {
                temperaturaAlmacenamiento = parseFloat(prompt("Ingrese la temperatura de almacenamiento entre -30 y 30")); 
            }while(isNaN(temperaturaAlmacenamiento)==true || temperaturaAlmacenamiento < -30 || temperaturaAlmacenamiento > 30);

            if (temperaturaAlmacenamiento%2==0){
                acumuladorTempPar = acumuladorTempPar + 1; //punto a
            }
            if (pesoProducto>productoMasPesado||bandera==0){ //punto b
                productoMasPesado = pesoProducto; 
                marcaProdMasPesado = marcaProducto;
                bandera = 1; 
            }
            if (temperaturaAlmacenamiento<0){ //punto c
                contadorProductos = contadorProductos + 1; 
            }
            if (pesoProducto < pesoMin || bandera2 == 0){ //punto e
                pesoMin = pesoProducto; 
                bandera2 = 1; 
            }

            respuesta = prompt("Desea seguir ingresando productos?Indique s/n"); 
        }while(respuesta=="s");

        promedioPeso = acumPeso / contPeso; //punto d

        document.write("La cantidad de temperaturas pares es "+acumuladorTempPar+"<br>")
        document.write("La marca del producto mas pesado es "+ marcaProdMasPesado+"<br>");
        document.write("La cantidad de productos que se conservan a menos de 0 grados es "+contadorProductos+"<br>");
        document.write("El promedio del peso de los productos es "+promedioPeso+"<br>");
        document.write("El peso maximo es "+productoMasPesado+"<br>");
        document.write("El peso minimo es "+pesoMin+"<br>");

}
