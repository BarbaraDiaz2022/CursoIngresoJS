/*
Barbara Diaz
Ejercicio 7  


Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	let numeroUno;
	let numeroDos;
    let solucion; 
	let mensajeMostrado;

	numeroUno=parseInt(document.getElementById("txtIdNumeroUno").value);
	numeroDos=parseInt(document.getElementById("txtIdNumeroDos").value);

	solucion=numeroUno+numeroDos;

	mensajeMostrado="La suma es " +solucion; 
	alert(mensajeMostrado);	
}

function restar()
{
	let numeroUno;
	let numeroDos;
	let solucion;
	let mensajeMostrado; 

	numeroUno= parseInt(document.getElementById("txtIdNumeroUno").value);
	numeroDos= parseInt(document.getElementById("txtIdNumeroDos").value);
	

	solucion= numeroUno - numeroDos;

	mensajeMostrado= "La resta es " + solucion; 
    alert(mensajeMostrado);
	
}

function multiplicar()
{ 
	let numeroUno;
    let numeroDos;
    let solucion;
	let mensajeMostrado; 

	numeroUno= parseInt(document.getElementById("txtIdNumeroUno").value);
	numeroDos= parseInt(document.getElementById("txtIdNumeroDos").value);
	

     solucion= numeroUno * numeroDos;
	 mensajeMostrado= "La multiplicacion es " + solucion; 
	 alert(mensajeMostrado);

}

function dividir()
{
	let numeroUno;
	let numeroDos;
	let solucion;
	let mensajeMostrado;

	numeroUno= parseInt(document.getElementById("txtIdNumeroUno").value);
	numeroDos= parseInt(document.getElementById("txtIdNumeroDos").value);
	

	solucion= numeroUno / numeroDos;

	mensajeMostrado= "La division es " + solucion;
	alert(mensajeMostrado);
}

