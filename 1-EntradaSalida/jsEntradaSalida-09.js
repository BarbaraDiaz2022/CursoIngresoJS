/* Barbara Diaz
Ejercicio 9

Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{  
    //declaro variables

    let sueldo;
    let aumento;
    let sueldoAumentado;
    
    //agrego valor
    sueldo= parseInt(document.getElementById("txtIdIngreseSueldo").value);

    //calculo el aumento del sueldo 
    aumento= sueldo * 0.1;

    //calculo el sueldo aumentado   
    sueldoAumentado= sueldo + aumento;  

    //lo muestro en la caja de texto 
    document.getElementById("txtIdResultado").value = sueldoAumentado; 
 
    
}
