//diaz barbara
//ejercicio for 4
function mostrar()
{
	let i; 
	let repeticiones;

	repeticiones = parseInt(prompt("Ingrese cantidad de repeticiones"));

	for (i=0; i<=repeticiones; i++){
		if (i == 4){
			break; 
		}
		alert(i); 
	}
}