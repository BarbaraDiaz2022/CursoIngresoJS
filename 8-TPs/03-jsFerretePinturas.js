//Diaz Barbara
//TP 3 

/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    let ingresoTemperatura; 
    let pasoFahrenheitACentigrados; 
    const FAHRENHEIT= 32
    const FAHRENHEIT2= 1.8
    let mensaje; 

    ingresoTemperatura= parseFloat(document.getElementById("txtIdTemperatura").value); 
    pasoFahrenheitACentigrados= (ingresoTemperatura - FAHRENHEIT) / FAHRENHEIT2; 
    mensaje= ingresoTemperatura + " Fahrenheit son " + pasoFahrenheitACentigrados + " centígrados";
    alert(mensaje);  
}   

function CentigradosFahrenheit () 
{
    let ingresoTemperatura;
    let pasoCentigradosAFahrenheit; 
    const FAHRENHEIT= 32
    const FAHRENHEIT2= 1.8
    let mensaje;

    ingresoTemperatura= parseFloat(document.getElementById("txtIdTemperatura").value); 
    pasoCentigradosAFahrenheit= (ingresoTemperatura * FAHRENHEIT2) + FAHRENHEIT; 
    mensaje= ingresoTemperatura + " Centígrados son " + pasoCentigradosAFahrenheit + " Fahrenheit";
    alert(mensaje); 
	
}
