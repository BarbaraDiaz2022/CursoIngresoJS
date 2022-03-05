//diaz barbara
//ejercicio 7 parcial 2018

/* Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10),
el sexo (validar el sexo “f” o “m”) de 5 alumnos, informar por alert:
a) El promedio de las notas totales.
b) La nota más baja y el sexo de esa persona.
c) La cantidad de varones que su nota haya sido mayor o igual a 6.*/ 
function mostrar()
{
    let i; 
    let notas;
    let sexo; 
    let acumuladorNotas=0; //para el promedio 
    let promedioNotas; 
    let notaMin = 11; 
    let sexoNotaMin; 
    let contadorVarones = 0; 

    for (i=0; i<5; i++){
        do {
            notas = parseInt(prompt("Ingrese la nota"));
            acumuladorNotas = acumuladorNotas + notas;
        }while(isNaN(notas)==true || notas <0 || notas >10);

        do {
            sexo = prompt("Ingrese sexo. Indique f/m"); 
                if (sexo == "m" && notas>=6){
                    contadorVarones++; 
                }
        }while(sexo !="f" && sexo !="m");

        if (notas < notaMin){
            notaMin = notas; 
            sexoNotaMin = sexo;
        }
    }

    promedioNotas = acumuladorNotas / 5; 
    //punto a
    mensaje1 = "El promedio total de las notas es "+promedioNotas; 
    //punto b
    mensaje2 = "La nota mas baja es "+notaMin+" y el sexo de esa persona es "+sexoNotaMin;
    //punto c
    mensaje3 = "La cantidad de varones con nota mayor o igual a 6 es "+contadorVarones; 

    alert(mensaje1);
    alert(mensaje2);
    alert(mensaje3);     
}
//punto entregado 