//diaz barbara
//ejercicio 8 parcial 2018
/* Realizar el algoritmo que permita iterar el ingreso de dos datos, una letra y un número entre
-100 y 100 (validar) hasta que el usuario quiera e informar al terminar el ingreso por
document.write:
a) La cantidad de números pares.
b) La cantidad de números impares.
c) La cantidad de ceros.
d) El promedio de todos los números positivos ingresados.
e) La suma de todos los números negativos.
f) El número y la letra del máximo y el mínimo.*/

function mostrar()
{
    let letra;
    let numero; 
    let respuesta; 
    let contadorPares = 0; 
    let contadorImpares = 0; 
    let acumuladorCeros = 0; 
    let acumuladorPositivos = 0; 
    let contadorPositivos = 0; 
    let promedioPositivos; 
    let acumuladorNegativos = 0; 
    let numeroMax = 0;
    let letraMax; 
    let numeroMin = 0; 
    let letraMin; 
    let bandera = 0; 

    do {
        letra = prompt("Ingrese una letra");
        do {
            numero = parseFloat(prompt("Ingrese un numero entre -100 y 100"));
        }while (isNaN(numero)==true || numero < -100 || numero > 100);

        if (numero%2==0){
            contadorPares++; //punto a 
        }
        else if (numero%2!=0){
            contadorImpares++; //punto b
        }
        if (numero == 0){
            acumuladorCeros=acumuladorCeros+1; //punto c
        }

        if (numero>0){
            acumuladorPositivos = acumuladorPositivos + numero; //para sacar el promedio punto d
            contadorPositivos++; 
        }
        if (numero < 0){
            acumuladorNegativos = acumuladorNegativos + numero; //punto e
        }

        if (numero>numeroMax || bandera==0){ //punto f
            numeroMax = numero; 
            letraMax = letra; 
        }
        if (numero<numeroMin || bandera==0){ //punto f
            numeroMin = numero; 
            letraMin = letra; 
            bandera = 1; 
        }

        respuesta = prompt("Desea seguir ingresando? Indique s/n"); 
    }while(respuesta=="s");

    promedioPositivos = acumuladorPositivos / contadorPositivos; 

    document.write("La cantidad de numeros pares ingresados es "+contadorPares+"<br>");
    document.write("La cantidad de numeros impares ingresados es "+contadorImpares+"<br>");
    document.write("La cantidad de ceros ingresados es "+acumuladorCeros+"<br>");
    document.write("El promedio de los positivos ingresados es "+promedioPositivos+"<br>");
    document.write("La suma de los numeros negativos ingresados es "+acumuladorNegativos+"<br>");
    document.write("El numero maximo ingresados es "+numeroMax+" y la letra es "+letraMax+"<br>");
    document.write("El numero minimo ingresado es "+numeroMin+" y la letra es "+letraMin+"<br>");
    
}
