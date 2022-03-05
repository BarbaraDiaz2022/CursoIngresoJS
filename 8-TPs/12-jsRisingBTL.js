//diaz barbara
//tp 12

/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
	let edad; 
	let sexo;
	let estadoCivil; 
	let sueldoBruto; 
	let numeroDeLegajo; 
	let nacionalidad; 
	let mensaje; 
	let mensaje2;

	edad = parseInt(prompt("Ingrese edad si tiene entre 18 y 90 años")); 
	while (isNaN(edad) == true || edad < 18 || edad > 90){
		edad = parseInt(prompt("Error. Ingrese una edad dentro del rango"))
	}
	
	sexo = prompt("Ingrese su sexo, 'f'/'m'"); 
	while (sexo !="f" && sexo != "m"){
		sexo = prompt("Error. Indique 'f'/'m'"); 
	}
	
	estadoCivil = parseInt(prompt("Indique su estado civil con: 1 si es soltero, 2 si es casado, 3 para divorciado y 4 para viudo")); 
	while (isNaN(estadoCivil) == true){
		estadoCivil = parseInt(prompt("Error. Indique uno de los cuatro estados pedidos")); 
	}
	switch (estadoCivil){
		case 1:{
			mensaje = "soltero";
		}
		break; 
		case 2: {
			mensaje = "casado"; 
		}
		break; 
		case 3: {
			mensaje = "divorciado"; 
		}
		break;
		case 4: {
			mensaje = "viudo";
		}
		break; 
	}
	
	sueldoBruto = parseFloat(prompt("Ingrese sueldo bruto (no menor a $8000)")); 
	while (isNaN(sueldoBruto)==true || sueldoBruto < 8000){
		sueldoBruto = parseFloat(prompt("Error. Ingrese sueldo bruto (no menor a $8000)")); 
	}
	
	numeroDeLegajo = parseInt(prompt("Ingrese su numero de legajo de 4 cifras y sin ceros a la izquierda")); 
	while (isNaN(numeroDeLegajo)== true || numeroDeLegajo < 0999){
		numeroDeLegajo = parseInt(prompt("Error. Ingrese un numero de legajo correcto"))
	}
	
	nacionalidad = prompt("Indique su nacionalidad con 'a' para argentinos, 'e' para extranjeros o 'n' para nacionalizados"); 
	while (nacionalidad != "a" && nacionalidad !="e" && nacionalidad != "n"){
		nacionalidad = prompt ("Error. Ingrese una de las nacionalidades indicadas");
	}
	switch (nacionalidad){
		case "a": {
			mensaje2 = "argentino/na";
		}
		break; 
		case "e":{
			mensaje2 = "extranjero/ra";
		}
		break; 
		case "n":{
			mensaje2 = "nacionalizado/da";
		}
		break; 
	}

	document.getElementById("txtIdEdad").value = edad; 
	document.getElementById("txtIdSexo").value = sexo;
	document.getElementById("txtIdEstadoCivil").value = mensaje;
	document.getElementById("txtIdSueldo").value = sueldoBruto; 
	document.getElementById("txtIdLegajo").value = numeroDeLegajo; 
	document.getElementById("txtIdNacionalidad").value = mensaje2; 
}
