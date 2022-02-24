//Diaz Barbara
//Switch 1

function mostrar()
{
	/*let tomoElMes; 
	tomoElMes= document.getElementById("txtIdMes").value;

	switch(tomoElMes){
		case "Enero":
			alert("Que comiences bien el año!"); 
			break; 
		case "Marzo":
			alert("A clases!");
			break;
		case "Julio":
			alert("Se vienen las vacaciones");
			break;
		case "Diciembre":
			alert("Felices fiestas!");
			break; 
	}*/ 
	//Diaz Barbara
	//Consigna en el if 1 
	/*
	let distancia; 
	let tiempo; 
	let velocidad; 
	let mensaje; 

	distancia = parseFloat(prompt("Ingrese kilometros recorridos"));
	tiempo = parseFloat(prompt("Ingrese horas que tardo"));
	velocidad = distancia / tiempo; 

	if (velocidad <= 60){
		mensaje = "es muy lento";
	} 

	else if (velocidad <= 80){
		mensaje = "lento"; 
	}

	else if (velocidad <= 100){
		mensaje = "buen ritmo"; 
	}

	else if (velocidad <= 120){
		mensaje = "ahi de la ley";
	}

	else {
		mensaje = "eso no se hace"; 
	}

	alert (mensaje); */
	//ingreso nombre, peso en kg y altura en metros
	//calculo el imc con la formula peso / estatura elevada al cuadrado o estatura*estatura
	//informo si la persona es Bajo peso <18.5; Peso normal 18,5-24.9; Pre Obesidad 25-26.9
	//Obesidad I 27-29.9; Obesidad II 30-34.9; Obesidad III >40
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

	else if (imc <= 24.9){
		mensaje = nombre + " usted presenta peso normal"; 
	}

	else if (imc <= 26.9){
		mensaje = nombre + " usted presenta pre obesidad";
	}

	else if (imc <= 29.9){
		mensaje = nombre + " usted presenta obesidad I";
	}

	else if (imc <= 34.9){
		mensaje = nombre + " usted presenta obesidad II";
	}

	else if (imc >= 35) {
		mensaje = nombre + " usted presenta obesidad III";
	}
	alert (mensaje); 
} 