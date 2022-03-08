/* Pedir dos números y mostrar el resultado:
Si son iguales los muestro concatenados.
Si el primero es mayor, los resto,
de lo contrario los sumo.
Si la resta es mayor a 10 ,además de mostrar el resultado, muestro el mensaje
"la resta es xxx y superó el 10".*/
function mostrar()
{
    let numero1;
    let numero2; 
    let resultado;
    let mensaje;  

    do {
        numero1 = parseInt(prompt("Ingrese el primer numero(solo numeros)"));
    }while(isNaN(numero1)==true);

    do {
        numero2 = parseInt(prompt("Ingrese el segundo numero(solo numeros)"));
    }while(isNaN(numero2)==true);

    if (numero1 == numero2){
        mensaje = "los numeros ingresados son iguales: "+numero1+" y "+numero2;
    }
    else if(numero1>numero2){
        resultado = numero1 - numero2;
        mensaje = "el resultado de la resta es "+ resultado; 
        if (resultado>10){
            mensaje = "la resta da como resultado "+resultado+ " y supero el 10";
        }
    }
    else {
        resultado = numero1 + numero2;
        mensaje = "el resultado de la suma es "+ resultado; 
    }

    alert (mensaje); 
}
