//diaz barbara
//ejercicio for 7
function mostrar()
{
	let numero; 
	let contadorDeDivisores = 0;
	let i; 

	numero = parseInt(prompt("Ingrese un numero")); 

	for (i = 1; i <= numero; i++){
		if (numero % i == 0){
			console.log(i)
			contadorDeDivisores++;
		}
	}
	console.log("usted ingreso " + contadorDeDivisores + " divisores"); 
}