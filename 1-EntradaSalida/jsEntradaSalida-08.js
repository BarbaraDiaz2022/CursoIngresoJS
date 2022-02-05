/* Barbara Diaz
Ejercicio 8


Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	//declaro variables

    let dividendo;
	let divisor;
    let solucion;
	let mensajeMostrado; 
	//les asigno valor

	dividendo= parseInt(document.getElementById("txtIdNumeroDividendo").value);

	divisor= parseInt(document.getElementById("txtIdNumeroDivisor").value);
    //aplico la operacion

	solucion= dividendo % divisor;  
    //establezco el mensaje
	
	mensajeMostrado= "El resto es " + solucion; 

	alert(mensajeMostrado);
}
