//diaz barbara. Ejercicio 1
/* Adjuntamos el 1er ejercicio de 3 del examen de curso de ingreso,
1)De 5 personas que ingresan al hospital se deben tomar y validar los siguientes datos:
nombre, altura, peso y sexo.
a)informar la cantidad de personas de sexo femenino.
b)la altura promedio en total
c)el nombre del hombre con menos peso(si lo hay)
Pedir datos por prompt y mostrar por document.write*/

function mostrar()
{      /*
    let i;
    let nombre;
    let altura; 
    let peso; 
    let sexo; 
    let contadorMujeres = 0;
    let acumAltura = 0;  
    let promedio; 
    let bandera = 0; 
    let mensaje; 
    let pesoMin = 151; 

    for (i=0; i<5; i++){
        
        do {
            nombre = prompt("Ingrese nombre");
        }while(isNaN(nombre)==false);

        do{
            altura = parseFloat(prompt("Ingrese altura en centimetros"));
            acumAltura = acumAltura + altura; //para punto b
        }while(isNaN(altura)==true||altura<0||altura>225);

        do{
            peso = parseFloat(prompt("Ingrese el peso"));
        }while(isNaN(peso)==true||peso <2||peso>150); 

        do {
            sexo = prompt("ingrese sexo.Indique f/m");
        }while(sexo!="f"&&sexo!="m");
            //punto a 
            switch(sexo){
                case "f":
                    contadorMujeres++; 
                break; 
                case "m":
                    if(peso<pesoMin||bandera == 0){ //punto c
                        nombreHombreMin = nombre; 
                        mensaje = "el nombre del hombre con menos peso es "+nombreHombreMin; 
                        bandera =1;
                    }
                break; 
            }
    }
    //punto b 
    promedio = acumAltura / 5; 

    document.write("la cantidad de personas de sexo femenino es "+contadorMujeres+"<br>");
    document.write("la altura promedio total es "+promedio+ "cm"+"<br>");
    if(bandera==1){
        document.write(mensaje+"<br>");
    }  */

    //diaz barbara. Ejercicio 2
    /* Adjuntamos el 2do ejercicio de 3 del examen de curso de ingreso,
2)De una compra debes ingresar una cantidad indeterminada de productos, validando los siguientes datos:
nombre de producto, precio, unidades, tipo(minorista o mayorista)
a)informar el precio total de la compra.
b)el nombre del producto más caro de tipo minorista
c)el nombre del producto con menos unidades
*/
    /*
    let nombre; 
    let precio; 
    let unidades; 
    let tipo; 
    let seguir; 
    let acumPrecio = 0; 
    let precioMax = 0;
    let nombrePrecioMax; 
    let unidadesMin = 1501;
    let nombreUnidadesMin;
        do{
            do {
                nombre = prompt("Ingrese el nombre del producto (sin letras)"); 
            }while(isNaN(nombre)==false); 

            do {
                precio = parseFloat(prompt("Ingrese el precio(hasta $5000)"));
                acumPrecio = acumPrecio + precio; //punto a 
            }while(isNaN(precio)==true||precio<1||precio>5000);

            do {
                unidades = parseInt(prompt("Ingrese la cantidad de unidades(hasta 1500 unidades)"));
            }while(isNaN(unidades)==true||unidades<1||unidades>1500);

            do{
                tipo = prompt("Indique si es compra minorista o mayorista");
            }while(tipo!="minorista"&&tipo!="mayorista");
            //punto b 
            if (tipo=="minorista"&&precio>precioMax){
                nombrePrecioMax = nombre; 
            }
            //punto c 
            if(unidades<unidadesMin){
                nombreUnidadesMin = nombre; 
            }

            seguir = prompt("Desea seguir ingresando?Indique s/n"); 
        }while(seguir=="s");

    document.write("El precio total de la compra es $"+acumPrecio+"<br>");
    document.write("El nombre del producto mas caro de tipo minorista es "+nombrePrecioMax+"<br>");
    document.write("El nombre del producto con menos unidades es "+nombreUnidadesMin+"<br>"); */

//diaz barbara.Ejercicio 3
/*3)Nos ingresan una cantidad indeterminada de estadías de vacaciones, validando los datos ingresados:
nombre del pasajero titular,destino ( “Brasil”, “Caribe” o “Europa”), temporada(“alta”,”baja”,“media”),
cantidad de pasajeros que viajan. informar:
a)el lugar destino elegido.
b)el nombre del pasajero titular que lleva menos pasajeros.
c)el promedio de personas, que viajan en temporada alta. */

    let nombre;
    let destino;
    let temporada; 
    let cantidad; 
    let seguir; 
    let mensaje; 
    let cantidadMin = 6;
    let nombreCantMin; 
    let acumTemporadaAlta = 0;
    let contadorTempAlta = 0; 
    let contBrasil = 0;
    let contCaribe = 0;
    let contEuropa = 0; 

        do{
            do {
                nombre = prompt("Ingrese el nombre del titular (sin numeros)"); 
            }while(isNaN(nombre)==false); 

            do {
                destino = prompt("Ingrese destino. Indique brasil/caribe/europa")
            }while(destino!="brasil"&&destino!="caribe"&&destino!="europa");

            do{
                temporada = prompt("Indique temporada alta/baja/media");
            }while(temporada!="alta"&&temporada!="baja"&&temporada!="media");

            do {
                cantidad = parseInt(prompt("Ingrese la cantidad de personas que viajan(hasta 5 inclusive)"));
            }while(isNaN(cantidad)==true||cantidad<1||cantidad>6);

            switch(destino){ //punto a 
                case "brasil":
                    contBrasil++;
                break;
                case "caribe": 
                    contCaribe++;
                break;
                case "europa": 
                    contEuropa++; 
                break; 
            }
            //punto b 
            if(cantidad<cantidadMin){
                cantidadMin = cantidad; 
                nombreCantMin = nombre; 
            }
            //punto c 
            if (temporada == "alta"){
                acumTemporadaAlta = acumTemporadaAlta + cantidad; 
                contadorTempAlta++; 
            }
            seguir = prompt("Desea seguir ingresando? Indique s/n"); 
        }while(seguir == "s");

        //punto c 
        promedio = acumTemporadaAlta / contadorTempAlta; 
        //punto a
        if (contBrasil>contCaribe&&contBrasil>contEuropa){
             mensaje = "El destino mas elegido es brasil";
        }
        else if(contCaribe>contEuropa){
            mensaje = "El destino mas elegido es caribe";
        }
        else {
            mensaje = "El destino mas elegido es europa"; 
        }

        document.write(mensaje+"<br>"); 
        document.write("El nombre del titular que lleva menos pasajeros es "+nombreCantMin+"<br>"); 
        document.write("El promedio de personas que viajan en temporada alta es "+promedio+"<br>"); 
}
