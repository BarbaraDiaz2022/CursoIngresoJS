//diaz barbara
//ejercicio 9 parcial 2019
/* Realizar el algoritmo que permita ingresar el nombre de un país, cantidad de habitantes en
millones entre 1 y 7000 (validar)la temperaruta mínima que se registra en su territorio
(entre -50 y 50) hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de temperaturas pares.
b) El nombre del pais con menos habitantes
c) la cantidad de paises que superan los 40 grados.
d) el promedio de habitantes entre los paises ingresados
f) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura.*/
function mostrar()
{
    let nombrePais;
    let cantidadHabitantes;
    let temperatura; 
    let respuesta; 
    let contTemperaturaPar = 0; 
    let cantidadMinHab = 7001; 
    let paisMinHab; 
    let contPaisesTemp = 0; 
    let contPaises = 0; 
    let acumHabitantes = 0;
    let temperaturaMin = 51; 
    let nombrePaisTemMin; 
    let promedio; 

    do {
        nombrePais = prompt("Ingrese el nombre del pais"); 
            contPaises++; //para el punto d
        do {
            cantidadHabitantes = parseFloat(prompt("Ingrese la cantidad de habitantes en millones (entre 1 y 7000)")); 
            acumHabitantes = acumHabitantes + cantidadHabitantes; //para el punto d
        }while (isNaN(cantidadHabitantes)==true || cantidadHabitantes <1 || cantidadHabitantes>7000); 
        do {
            temperatura = parseFloat(prompt("Ingrese la temperatura minima de su pais")); 
        }while(isNaN(temperatura)==true || temperatura <-50 || temperatura>50)

        
        if (temperatura%2==0){ //punto a
            contTemperaturaPar++; 
        }
        if (cantidadHabitantes < cantidadMinHab){ //punto b 
            cantidadMinHab = cantidadHabitantes; 
            paisMinHab = nombrePais; 
        }
        if (temperatura > 40){ //punto c
            contPaisesTemp++; 
        }
        if (temperatura < temperaturaMin){ //punto f
            temperaturaMin = temperatura; 
            nombrePaisTemMin = nombrePais; 
        }

        respuesta = prompt("Desea seguir ingresando datos? Indique s/n"); 
    }while (respuesta == "s");

        promedio = acumHabitantes / contPaises++; //punto d

    document.write("La cantidad de temperaturas pares es "+contTemperaturaPar+"<br>");
    document.write("El pais con menos habitantes es "+nombrePaisTemMin+"<br>");
    document.write("La cantidad de paises que superan los 40° son "+contPaisesTemp+"<br>");
    document.write("El promedio de habitantes entre los paises ingresados es "+promedio+"<br>");
    document.write("El pais que ingreso la menor temperatura es "+nombrePais+" con una temperatura de "+temperaturaMin+"<br>");

}
