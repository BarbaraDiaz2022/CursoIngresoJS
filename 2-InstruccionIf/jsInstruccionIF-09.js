//Diaz Barbara 
//Ejercicio if 9 

function mostrar()
{
	let numero;
	let maximo= 10;
	let minimo=1;
	
	//un numero random se genera siempre de la siguiente forma 
	numero= Math.round(Math.random() * (maximo - minimo) + minimo);

	alert(numero);

}