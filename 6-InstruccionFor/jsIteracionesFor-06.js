//diaz barbara
//ejercicio for 6
function mostrar()
{
	let numero; 
	let contadorDeNumerosPares = 0;
	let i; 

	numero = parseInt(prompt("Ingrese un numero")); 

	for (i = 1; i < numero; i++){

		if (i % 2 == 0){
			console.log(i); 
			contadorDeNumerosPares++; 
		}
	}
	console.log("usted ingreso " + contadorDeNumerosPares + " numeros pares"); 
}