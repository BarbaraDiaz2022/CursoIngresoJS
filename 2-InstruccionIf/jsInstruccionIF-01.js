//Diaz Barbara
//Ejercicio If 1

function mostrar()
{
	/*//tomo la edad  
	let edad; 
	edad= parseInt(document.getElementById("txtIdEdad").value); 

	if ( edad == 15 ) {
	alert ("Niña bonita");
	} */
	let nombre; 
	let peso;
	let estatura; 
	let imc; 
	let mensaje; 

	nombre = prompt("Ingrese su nombre");
	peso = parseFloat(prompt("Ingrese su peso en kg"));
	estatura = parseFloat(prompt("Ingrese su estatura en mts"));
	imc = peso / (estatura * estatura); 

	if (imc <18.5){
		mensaje = nombre + " usted presenta bajo peso";
	}
	if (imc <= 24.9){
		mensaje = nombre + " usted presenta peso normal"; 
	}
	if (imc <= 26.9){
		mensaje = nombre + " usted presenta pre obesidad";
	}
	if (imc <= 29.9){
		mensaje = nombre + " usted presenta obesidad I";
	}
	if (imc <= 34.9){
		mensaje = nombre + " usted presenta obesidad II";
	}
	if (imc >= 35) {
		mensaje = nombre + " usted presenta obesidad III";
	}
	alert (mensaje); 

}