//Diaz Barbara 
//Ejercicio 7 Bis V3

function mostrar()
{	/*
	let edad; 
	let estadoCivil;
	edad = parseInt(document.getElementById("txtIdEdad").value); 
	estadoCivil = document.getElementById("estadoCivil").value; 
	
	if ( edad <= 17 && estadoCivil != "Soltero"){
		alert("Es muy pequeño para NO ser soltero"); 
	} */
	let edad;
	let mensaje;
	let resto;
	let nombre; 
	let estadoCivil;

	edad = parseInt(document.getElementById("txtIdEdad").value);
	resto= edad % 2;
	nombre= prompt("Ingrese su nombre");
	estadoCivil= document.getElementById("estadoCivil").value; 

		if (edad <=12){
			mensaje= "feliz día";
			if (nombre == "Ricardo"){ //ejercicio 3 f
				mensaje= mensaje + " , muy chiquito para ese nombre";
			}	
		}
			else{
				if(edad <17){
					mensaje= "usted es adolescente";
						if (nombre == "Violeta"){ //ejercio 3 e
							mensaje= mensaje + " , como el color!" ; 
						}
						if (estadoCivil== "Casado"){ //ejercicio 3 h
							mensaje= mensaje + " casada quiere casa";
						}
						if (estadoCivil== "Divorciado"){ //ejercicio 3 j
							mensaje= mensaje + " ,toda una vida por delante"; 
						}
				}
				if (edad ==17){
					mensaje= "usted es adolescente " + ", ultimo año!"; 
				}
					if (estadoCivil== "Divorciado"){
						mensaje= mensaje + " ,toda una vida por delante"; 
					}
				if (edad >=18){
					mensaje= "tienes edad de laburar,";
						if (estadoCivil== "Soltero"){
							mensaje= mensaje + " a salir";//ejercicio 3 i
						}
				}
				if (edad ==33){
					mensaje= "tienes edad de laburar" + " , como cristo";
						if (estadoCivil== "Soltero"){
							mensaje= mensaje + ", a salir"; //ejercicio 3 i
						}
				}
				if (edad ==60){
					mensaje= " a jubilarse";
					if (nombre == "Alfredo"){ //ejercicio 3 g 
						mensaje=  mensaje + " , como el de QUEENS!,  " ; 
					}
				}
				if (edad ==88){
					mensaje= "lindo numero"; 
				}		
			}
			if (resto ===0){
				mensaje= mensaje + " ,sos par!"; 
			}			
	alert(mensaje);
}