function mostrar()
{
	let i;
	let numero;
	let contadorDeNumeroPrimo = 0;
	let contadorDeNumeroNoPrimo = 0; 


	numero = parseInt(prompt("Ingrese un numero"));
	for (i = 0; i <= numero; i++){
		if (numero % i == 1 && numero % 1 == 1){

			contadorDeNumeroPrimo = numero; 
		}
		else {
			contadorDeNumeroNoPrimo++;
		}
	}
	console.log(contadorDeNumeroPrimo + " es primo"); 
	console.log(contadorDeNumeroNoPrimo + " no es primo");
}