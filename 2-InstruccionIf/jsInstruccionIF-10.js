//Diaz Barbara 
//Ejercicio if 10 

function mostrar()
{
	let numero;
	let maximo= 10;
	let minimo=1;
	 
	numero= Math.round(Math.random() * (maximo - minimo) + minimo);

	if (numero >=9) {
		alert(numero + " Excelente");
	}
	else if (numero >=4){
		alert(numero + " Aprobó"); 
		}
		else {
			alert(numero + " Vamos, la próxima se puede"); 
		}

}