//diaz barbara
//ejercicio for 8
function mostrar()
{
	let i;
	let numero;
	let contadorDeNumeroPrimo = 0;
	let mensaje; 

	numero = parseInt(prompt("Ingrese un numero"));

	for (i = 0; i <= numero; i++){
		if (numero % i == 0){
			contadorDeNumeroPrimo++; 
		}
	}	
	if (contadorDeNumeroPrimo == 2){
		mensaje = "es primo";
	} 
	else {
		mensaje = "no es primo";
	}
	console.log(mensaje); 
}