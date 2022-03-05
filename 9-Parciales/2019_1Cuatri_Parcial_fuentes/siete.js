//diaz barbara
//ejercicio 7 parcial 2019
/* Realizar el algoritmo que permita el ingreso por prompt de las alturas en centimetros(validar
entre 0 y 250) , el sexo. (validar el sexo “f” o “m”) de 5 jugadores de básquet, informar por
alert:
a) El promedio de las alturas totales.
b) La altura más baja y el sexo de esa persona.
c) La cantidad de muheres que su altura supere los 190 centimetros.
Curso de ingreso UTN FRA*/ 

function mostrar()
{
    let altura; 
    let sexo; 
    let i; 
    let acumAltura = 0; 
    let alturaMin = 251; 
    let sexoAlturaMin; 
    let contMujeresAltas = 0; 
    let promedio; 
    let mensajeA;
    let mensajeB;
    let mensajeC; 

    for (i=0; i<5; i++){
        do {
            altura = parseFloat(prompt("Ingrese su altura en cm, solo hasta 250 cm"));
            acumAltura = acumAltura + altura; //para el promedio del punto a 
        }while(isNaN(altura)==true || altura <1 || altura >250); 
        do {
            sexo = prompt("Ingrese su sexo. Indique f/m"); 
        }while(sexo != "f" && sexo != "m");

        if (altura < alturaMin){ //punto b
            alturaMin = altura; 
            sexoAlturaMin = sexo; 
        }
        if (altura > 190 && sexo == "f"){ //punto c 
            contMujeresAltas++; 
        }
    }

        promedio = acumAltura / 5; 
        mensajeA = "El promedio de las alturas totales ingresadas es "+promedio; 
        mensajeB = "La altura mas baja ingresada es "+alturaMin+" y el sexo de esa persona es "+sexoAlturaMin; 
        mensajeC = "Las mujeres que superan los 190 cm de altura son "+contMujeresAltas; 

        alert(mensajeA);
        alert(mensajeB);
        alert(mensajeC); 

}
