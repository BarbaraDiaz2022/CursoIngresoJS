/*
Barbara Diaz 
Ejercicio 6

Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{ 
	let numeroUno;
    let numeroDos;
     let solucion; 
     let mensajeMostrado;

/* si agrego el parseInt ahorro lineas de codigo*/
numeroUno=parseInt(document.getElementById("txtIdNumeroUno").value);
numeroDos=parseInt(document.getElementById("txtIdNumeroDos").value);


solucion= numeroUno + numeroDos;

mensajeMostrado= "La suma es " + solucion; 

	alert(mensajeMostrado);
}

