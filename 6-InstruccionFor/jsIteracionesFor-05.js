function mostrar()
{
	let i; 
	let numero;

	for (i = 0; ; i++){ //si ; ; en lugar de poner condicion crea un loop infinito
		
		numero = parseInt(prompt("Ingrese un numero"));

		if (numero == 9){
			break; 
		}
	}

}