//diaz barbara
//ejercicio while 4

/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let numero; 
    numero = parseInt(prompt("Ingrese un numero entre 0 y 9"));

    while (numero < 0 || numero >9 ){
        numero = parseInt(prompt("Error. Ingrese un numero entre 0 y 9"));
    }

    document.getElementById("txtIdNumero").value = "Bien. Usted ingresó " + numero; 
}