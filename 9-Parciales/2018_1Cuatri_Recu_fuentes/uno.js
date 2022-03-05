//diaz barbara ejercicio Simil Parcial 1 
/* Realizar el algoritmo que permita ingresar 5 paises:
el continente (validar entre america , asia , europa ,africa y oceania)
el nombre del país,
cantidad de habitantes en millones entre 1 y 7000 (validar)
el nivel de pobresa entre (pobre, rico , muy rico) en europa no hay paises pobre(validar) 
la sexo; 
PRECIO = 600; mínima que se registra en su territorio(entre -50 y 50) 
a)La cantidad de temperaturas pares.
b)la cantidad de temperaturas impares de europa
c)El nombre del pais con menos habitantes
d)la cantidad de paises que superan los 40 grados.
e)la cantidad de paises de america que tienen menos de 0 grados .
f)el promedio de habitantes entre los paises ingresados .
g)el promedio de habitantes entre los paises que superan los 40 grados    
H) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura.
i) que continente tiene mas habitantes.*/
function mostrar()
{   /*
    let i; 
    let continente; 
    let pais; 
    let habitantes; 
    let nivelPobreza; 
    let temperatura; 
    let contadorTempPar = 0; 
    let contadorTempImpar = 0; 
    let habitantesMin = 7001; 
    let paisHabitantesMin; 
    let contPaisesQueSuperan40 = 0; 
    let contadorPaisesAmerica = 0; 
    let temperaturaMin = 51; 
    let paisTempMin; 
    let habitantesMax = 0; 
    let acumHabitantes = 0; 
    let promedioHabPais; 
    let promedioPais40; 
    let acumHabitantesPais = 0; 

    for (i=0; i<5; i++){
        do {
            continente = prompt("Ingrese el continente");
        }while(continente!="asia"&&continente!="america"&&continente!="africa"&&continente!="europa"&&continente!="oceania");

        pais = prompt("Ingrese el nombre del pais"); 

        do {
            habitantes = parseFloat(prompt("Ingrese la cantidad de habitantes en millones. Hasta 7000"))
            acumHabitantes = acumHabitantes + habitantes; 
        }while(isNaN(habitantes)==true || habitantes <1 || habitantes>7000); 
        
        do{
            nivelPobreza = prompt("Ingrese el nivel de pobreza entre: pobre, rico y muy rico")
        }while(continente == "europa" && nivelPobreza!="pobre"&&nivelPobreza!="rico"&&nivelPobreza!="muy rico");
        do {
            temperatura = parseFloat(prompt("Ingrese la temperatura minima que se registra en su pais"));
        }while(isNaN(temperatura)==true || temperatura < -50 || temperatura > 50); 
        //punto a
        if (temperatura%2==0){
            contadorTempPar++;
        }//punto b 
            else if(continente=="europa"){
                contadorTempImpar++; 
            }
        //punto c 
        if (habitantes<habitantesMin){
            habitantesMin = habitantes; 
            paisHabitantesMin = pais; 
        }
        //punto d 
        if (temperatura > 40){
            contPaisesQueSuperan40++;
            acumHabitantesPais = acumHabitantesPais + habitantes; 
        }
        //punto e 
        if (continente=="america" && temperatura<0){
            contadorPaisesAmerica++; 
        }
        //punto h 
        if (temperatura < temperaturaMin){
            temperaturaMin = temperatura;
            paisTempMin = pais; 
        }
        //punto i 
        if (habitantes>habitantesMax){
            habitantesMax = habitantes; 
            continenteMaxHab = continente; 
        }
    }
    //punto f 
    promedioHabPais = acumHabitantes / 5; 
    //punto g 
    if (temperatura > 40){
        promedioPais40= acumHabitantesPais / contPaisesQueSuperan40;
    }
    console.log("La cantidad de temperaturas pares ingresadas es "+contadorTempPar);
    console.log("La cantidad de temperaturas impares en Europa es "+contadorTempImpar);
    console.log("El pais con menos habitantes es "+paisHabitantesMin);
    console.log("Los paises que superan los 40° son "+contPaisesQueSuperan40);
    console.log("Los paises de America que presentaron menos de0° son "+contadorPaisesAmerica);
    console.log("El promedio de habitantes de los paises ingresados es "+promedioHabPais);
    console.log("El promedio de habitantes de los paises que superan los 40° es "+promedioPais40);
    console.log("La temperatura minima ingresada fue "+temperaturaMin+" y el pais es "+paisTempMin);
    console.log("El continente con mas habitantes es "+continenteMaxHab);*/
	
    //diaz barbara 
	/*Simil Parcial 2:
	El alumno deberá ingresar:
	Nombre del alumno
	Carrera (Programación, Psicología, Diseño gráfico)
	Estado de la carrera: en curso-abandono-finalizado
	Sexo (femenino-masculino-nobinario)
	Edad (18 o más)
	Nota (entre 1 y 10)
	2. Se desconoce la cantidad de alumnos que se ingresaran.
	3. Se deberán validar los casos resaltados en negrita.
	4. El programa deberá informar a través del documento html:
	A. Cantidad total de alumnos de cada carrera.
	B. Cantidad total de mujeres que cursan la carrera de programación
	C. Cantidad de alumnos no binarios.
	D. Promedio de notas de los alumnos finalizantes.
	E. Nombre, sexo y edad del alumno mas viejo en la carrera de psicología.
	F. Nombre, nota y estado de la carrera del mejor alumno no binario que estudia psicología.)
	G. ¿Cuál es la carrera que tiene más alumnos?*/
	/*	
	let nombre;
	let carrera; 
	let estadoDeCarrera; 
	let sexo;
	let edad; 
	let nota; 
	let respuesta;
	let totalAlumnosProgramacion=0; 
	let totalAlumnosPsicologia=0;
	let totalAlumnosDisenio=0; 
	let contadorMujeresProgramacion=0; 
	let contadorAlumnosNoB=0; 
	let acumNotasIngresadas=0; 
	let acumuladorAlumnoMasViejo=0;
	let bandera = 0;
	let edadMasGrande = 18; 
	let notaMax= 0; 
	let acumuladorMejorNotaNB=0; 
	let nombreAlumnoMasViejo; 
	let sexoAlumnoMasViejo; 
	let nombreMejorNota;
	let estadoMejorNota; 
	let promedio;
	let totalAlumnosCarreras; 
    let contadorAlumnosFinalizantes = 0; 
	let mensajes; 

	do{
		nombre = prompt("Ingrese su nombre"); 
		do {
			carrera = prompt("Ingrese su carrera");
		}while(carrera != "programacion" && carrera != "psicologia" && carrera!= "diseño grafico");

		do {
			estadoDeCarrera = prompt("Ingrese el estado de carrrera. Indique en curso, abandono, finalizado")
		}while (estadoDeCarrera!="en curso" && estadoDeCarrera != "abandono" && estadoDeCarrera!= "finalizado");

		do {
			sexo = prompt("Ingrese su sexo. Indique f, m ó nb(para no binario)");
		}while(sexo != "f" && sexo!="m" && sexo!= "nb");

		do {
			edad = parseInt(prompt("Ingrese su edad"));
		}while (isNaN(edad)==true || edad <18);

		do {
			nota = parseInt(prompt("Ingrese su nota")); 
		}while (isNaN(nota)==true || nota < 1 || nota > 10); 
		//punto a total alumnos de las carreras 
		switch (carrera){
			case "programacion":
				totalAlumnosProgramacion++; 
					if (sexo == "f" && estadoDeCarrera == "en curso"){ //punto b cant de mujeres en programacion
						contadorMujeresProgramacion++; 
					}
			break; 
			case "psicologia": 
				totalAlumnosPsicologia++;
					if (bandera = 0 || edad > edadMasGrande){ //punto e Nombre, sexo y edad del alumno mas viejo en la carrera de psicología.
						acumuladorAlumnoMasViejo = edad;
						nombreAlumnoMasViejo= nombre; 
						sexoAlumnoMasViejo = sexo; 
						bandera =1; 
					}
					if (sexo == "nb" && nota > notaMax){ //punto f Nombre, nota y estado de la carrera del mejor alumno no binario que estudia psicología
						acumuladorMejorNotaNB=nota; 
						nombreMejorNota = nombre; 
						estadoMejorNota = estadoDeCarrera; 
					}
			break; 
			case "diseño grafico":
				totalAlumnosDisenio++;
			break; 
		}
		if (sexo == "nb"){ //punto c cant de alumnos nb
			contadorAlumnosNoB++; 
		}
		if (estadoDeCarrera == "finalizado"){ //punto d para el promedio uso las notas y el total de alumnos
			acumNotasIngresadas=acumNotasIngresadas+nota;
            contadorAlumnosFinalizantes++;  
		}

		respuesta = prompt("Desea seguir ingresando datos? Indique s/n"); 
	}while(respuesta == "s");

	//carrera que tiene más alumnos
	if (totalAlumnosProgramacion>totalAlumnosPsicologia && totalAlumnosProgramacion>totalAlumnosDisenio){
		mensajes = "La carrera con mas alumnos es programacion"; 
	}
	else if (totalAlumnosPsicologia>totalAlumnosDisenio){
		mensajes = "La carrera con mas alumnos es psicologia"; 
	}
	else {
		mensajes = "La carrera con mas alumnos es diseño grafico"; 
	}
	promedio = acumNotasIngresadas / contadorAlumnosFinalizantes; //punto d promedio 
	totalAlumnosCarreras = totalAlumnosProgramacion + totalAlumnosPsicologia + totalAlumnosDisenio; 

	document.write("La cantidad total de alumnos de todas las carreras es "+totalAlumnosCarreras+"<br>");
	document.write("La cantidad de mujeres en programacion es "+contadorMujeresProgramacion+"<br>"); 
	document.write("La cantidad de alumnos no binario son "+contadorAlumnosNoB+"<br>"); 
	document.write("Promedio de notas de alumnos finalizados "+promedio+"<br>"); 
	document.write("Nombre, sexo y edad del alumno mas viejo en la carrera de psicología: "+nombreAlumnoMasViejo+", "+sexoAlumnoMasViejo+" de "+acumuladorAlumnoMasViejo+ " años "+"<br>"); 
	document.write("Nombre, nota y estado de la carrera del mejor alumno no binario que estudia psicología: "+ nombreMejorNota+" ,"+estadoMejorNota+ " "+acumuladorMejorNotaNB+"<br>");
	document.write("Carrera que tiene mas alumnos: "+mensajes); */

    //diaz barbara ejercicio Simil parcial 3
    /* Simil Parcial 3:
pedir el ingreso de 10 mascotas
validar tipo ( gato , perro , pájaro y otros)solo esos cuatro tipo
raza, si es perro (pastor, toy, callejero) y si gato (siamés, turco, Peterbald , generico) y si es de tipo "otros" o
pájaro, pedir solo un texto 
edad entre 1 y 20 para gatos y perros , para "otros" entre 1 y 100 , para pájaro 1 de 50
nombre (no se permite solo numero)
mostrar por cada tipo el nombre del mas viejo , solo si hay de ese tipo
mostrar que raza de gatos tiene mas animales y el promedio de edad de esta raza*/
	/*
	let i; 
	let tipo;
	let raza;
	let edad; 
	let nombre; 
	let edadPerroMax = 0;
	let nombrePerroMax; 
	let nombreGatoMax; 
	let edadGatoMax = 0;
	let edadPajaroMax = 0; 
	let nombrePajaroMax; 
	let edadOtroMax = 0; 
	let nombreOtroMax; 
	let contTurco = 0; 
	let contSiames = 0; 
	let contPeterbald = 0; 
	let contGenerico = 0; 
	let mensaje;
	let acumEdadSiames = 0;
	let acumEdadTurco = 0; 
	let acumEdadPeterbald = 0;
	let acumEdadGenerico = 0; 
	let promedio;
	let bandera = 0; 
	let bandera1 = 0;
	let bandera2 = 0;
	let bandera3 = 0; 

		for (i=0; i<10; i++){
			
			do {
				tipo = prompt("Ingrese el tipo de mascota entre: gato/perro/pajaro/otro"); 
			}while(tipo!="gato"&&tipo!="perro"&&tipo!="pajaro"&&tipo!="otro");
				if(tipo == "gato"|| bandera == 0){
						do{
							raza = prompt("Ingrese raza de gato entre: siames/turco/peterbald/generico");
						}while(raza!="siames"&&raza!="turco"&&raza!="peterbald"&&raza!="generico");
							switch(raza){
								case "siames": //para comparar y sacar el promedio del punto b 
									contSiames++;
								break; 
								case "turco":
									contTurco++;
								break; 
								case "peterbald":
									contPeterbald++; 
								break; 
								default:
									contGenerico++; 
								break; 
							}
						do{
							edad = parseInt(prompt("Ingrese la edad. Solo hasta 20 años"));
						}while(isNaN(edad)==true || edad <0 || edad > 20);
						//para promedio del punto b
							switch(edad){
								case "siames":
									acumEdadSiames = acumEdadSiames + edad; 
								break; 
								case "turco":
									acumEdadTurco = acumEdadTurco + edad;  
								break; 
								case "peterbald":
									acumEdadPeterbald = acumEdadPeterbald + edad; 
								break; 
								case "generico":
									acumEdadGenerico = acumEdadGenerico + edad; 
								break;
							}
						do {
							nombre = prompt("Ingrese el nombre de su mascota(sin numeros)"); 
						}while(isNaN(nombre)==false); 
							if (edad > edadGatoMax){ //para punto a 
								edadGatoMax = edad;
								nombreGatoMax = nombre; 
							}
					bandera = 1; 
				}
				
				else if (tipo =="perro"|| bandera1 == 0){ 
					do {
						raza = prompt("Ingrese raza de perro entre:pastor/toy/callejero");
					}while(raza!="pastor"&&raza!="toy"&&raza!="callejero"); 
					do {
						edad = parseInt(prompt("Ingrese la edad. Solo hasta 20 años"));
					}while(isNaN(edad)==true || edad <0 || edad > 20);
					do {
						nombre = prompt("Ingrese el nombre de su mascota(sin numeros)"); 
					}while(isNaN(nombre)==false); 
						if (edad > edadPerroMax){ //para punto a 
							edadPerroMax = edad; 
							nombrePerroMax = nombre; 
						}
					bandera = 1; 
				}

				else if ("pajaro" || bandera2 == 0){
					do {
						edad = parseInt(prompt("Ingrese la edad. Solo hasta 50 años"));
					}while(isNaN(edad)==true || edad <0 || edad > 50);
					do {
						nombre = prompt("Ingrese el nombre de su mascota(sin numeros)"); 
					}while(isNaN(nombre)==false); 
						if(edad>edadOtroMax){ //para punto a 
							edadPajaroMax = edad; 
							nombrePajaroMax = nombre; 
						}
				bandera2 = 1; 
				}

				else if(tipo == "otro" || bandera3 == 0){ 
					do {
						edad = parseInt(prompt("Ingrese la edad. Solo hasta 100 años"));
					}while(isNaN(edad)==true || edad <0 || edad > 100);
					do {
						nombre = prompt("Ingrese el nombre de su mascota(sin numeros)"); 
					}while(isNaN(nombre)==false); 
						if(edad>edadOtroMax){ //para punto a 
							edadOtroMax = edad; 
							nombreOtroMax = nombre; 
						}
					bandera3 = 1;
				}
		}
		//comparo y saco el promedio 
		if (contSiames>contTurco && contSiames>contPeterbald && contSiames>contGenerico){
			promedio = acumEdadSiames / contSiames;
			mensaje = "La mayor cantidad de gatos es de la raza 'siames'";
		}
		else if (contTurco>contPeterbald&&contTurco>contGenerico){
			promedio = acumEdadTurco / contTurco; 
			mensaje = "La mayor cantidad de gatos es de la raza 'turco'";
		}
		else if(contPeterbald>contGenerico){
			promedio = acumEdadPeterbald / contPeterbald;
			mensaje = "La mayor cantidad de gatos es de la raza 'peterbald'";
		}
		else {
			promedio = acumEdadGenerico / contGenerico; 
			mensaje = "La mayor cantidad de gatos es de la raza 'generico'"; 
		}

	console.log("Del tipo gato, el nombre del animal mas viejo es "+nombreGatoMax);
	console.log("Del tipo perro, el nombre del animal mas viejo es "+nombrePerroMax);
	console.log("Del tipo pajaro, el nombre del animal mas viejo es "+nombrePajaroMax);
	console.log("Del tipo 'otro', el nombre del animal mas viejo es "+nombreOtroMax);
	console.log(mensaje+" y el promedio de edad es "+promedio); */

	//diaz barbara
	/* Simil Parcial 4:
"Super Chino" Se pide el ingreso de mercadería de un supermercado, hasta que el usuario quiera, se pide:
Tipo(limpieza , comestible , otros)solo estos tres tipos
Nombre del producto (validar no sea número) 
precio del producto (no mayor a 1000 pesos)
Procedencia (importado, nacional, elaborado)
Peso (no mayor a 30 kilos)
informar SOLO SI HAY
a) el NOMBRE del mas pesado de los comestibles
b) el NOMBRE del mas caro de todos los productos
c) el NOMBRE del mas barato de los elaborados
d) el tipo de mercadería que mas aparece
e) el porcentaje de productos elaborados por sobre el total
f) el promedio de pesos por cada tipo ingresado*/
		/*
		let tipo; 
		let nombre;
		let precio; 
		let procedencia; 
		let peso; 
		let respuesta; 
		let mensaje; 
		let mensaje2; 
		let pesoMaxComestible = 0; 
		let nombreComestibleMax; 
		let precioProductoMax = 0; 
		let precioMinElaborado = 1001;
		let nombrePrecioMinElaborado; 
		let contadorTipoLimpieza = 0; 
		let contadorTipoComestible = 0;
		let contadorTipoOtro = 0; 
		let mensaje1; 
		let contadorTotalProcedencia = 0;
		let contadorElaborado = 0;
		let porcentajeElaborado; 
		let acumPesoLimpieza = 0; 
		let acumPesoComestible = 0;
		let acumPesoOtro = 0; 
		let promedioComestible;
		let promedioLimpieza;
		let promedioOtro; 

			do{
				do{
					tipo = prompt("Ingrese el tipo de producto entre: limpieza/comestible/otro");
				}while(tipo!="limpieza"&&tipo!="comestible"&&tipo!="otro");

					switch (tipo){ //para punto d
						case "limpieza":
							contadorTipoLimpieza++;
						break; 
						case "comestible":
							contadorTipoComestible++;
						break;
						case "otro":
							contadorTipoOtro++; 
						break; 
					}

				do {
					nombre = prompt("Ingrese el nombre del producto(sin numeros)"); 
				}while(isNaN(nombre)==false); 
				
				do{
					precio = parseFloat(prompt("Ingrese el precio. No mayor a $1000"));
				}while(isNaN(precio)==true || precio <0 || precio > 1000); 

				do{
					procedencia = prompt("Indique procedencia del producto entre: importado/nacional/elaborado");
				}while(procedencia!="importado"&&procedencia!="nacional"&&procedencia!="elaborado");
					switch (procedencia){ //para punto e 
						case "elaborado":
							contadorElaborado++;
						break; 
					}
					contadorTotalProcedencia++; 

				do {
					peso = parseFloat(prompt("Ingrese el peso. No mayor a 30 kilos")); 
				}while(isNaN(peso)==true || peso <0 || peso > 30); 
					if(tipo == "limpieza"){ //para punto f 
						acumPesoLimpieza = acumPesoLimpieza + peso;
					}
					else if(tipo == "comestible"){
						acumPesoComestible = acumPesoComestible + peso; 
					}
					else if(tipo == "otro") {
						acumPesoOtro = acumPesoOtro + peso; 
					}

				if (tipo=="comestible"&&peso>pesoMaxComestible){ //punto a 
					pesoMaxComestible = peso; 
					nombreComestibleMax = nombre; 
					mensaje = "el comestible mas pesado es "+nombreComestibleMax;
				}

				if(precio>precioProductoMax){ //punto b
					precioProductoMax = precio; 
					nombrePrecioMax = nombre; 
					mensaje = "el producto mas caro es "+nombrePrecioMax; 
				}

				if(precio<precioMinElaborado&&procedencia=="elaborado"){ //punto c
					precioMinElaborado = precio; 
					nombrePrecioMinElaborado = nombre; 
					mensaje2 = "el producto elaborado mas barato es "+nombrePrecioMinElaborado; 
				}

				respuesta = prompt("Desea seguir ingresando? Indique s/n");
			}while(respuesta == "s");

			if (contadorTipoLimpieza>contadorTipoComestible && contadorTipoLimpieza>contadorTipoOtro){//punto d 
				mensaje1 = "el producto mas ingresado fue de tipo 'limpieza'";
			}
			else if (contadorTipoComestible>contadorTipoOtro){
				mensaje1 = "el producto mas ingresado fue de tipo 'comestible'";
			}
			else {
				mensaje1 = "el producto mas ingresado es 'otro'"; 
			}

			porcentajeElaborado = contadorElaborado * 100 / contadorTotalProcedencia; //punto e 
			//punto f 
			promedioLimpieza = acumPesoLimpieza / contadorTipoLimpieza;
			promedioComestible = acumPesoComestible / contadorTipoComestible;
			promedioOtro = acumPesoOtro / contadorTipoOtro; 
			
			document.write(mensaje+"<br>"); 
			document.write(mensaje1+"<br>"); 
			document.write(mensaje2+"<br>"); 
			document.write("el porcentaje de productos elaborados por sobre el total es "+porcentajeElaborado.toFixed(2)+"<br>");
			document.write("el promedio de productos de limpieza es "+promedioLimpieza.toFixed(2)+"<br>");
			document.write("el promedio de produtos comestibles es "+promedioComestible.toFixed(2)+"<br>");
			document.write("el promedio de productos tipo 'otro' es "+promedioOtro.toFixed(2)+"<br>"); */
		
	//diaz barbara 
	/* Simil Parcial 5:
Debemos alquilar el servicio de transporte para llegar a Mar del Plata con un grupo de personas, de cada persona 
debemos obtener los siguientes datos:
Nombre (validar que no sea número)
Obra Social ("PAMI", "OSDE" o "otras"),
Edad(solo mayores de edad, más de 17),
Temperatura corporal(validar por favor)
Sexo (validar femenino, masculino, no binario)
NOTA:el precio por pasajero es de $600.
Se debe informar (solo si corresponde):
a) La cantidad de personas con OSDE de más de 60 años.
b) el nombre y temperatura de la mujer PAMI más joven.
c) cuanto sale el viaje total sin descuento.
d) si hay más del 50% de los pasajeros que pertenecen a PAMI, el precio final tiene un descuento del 25%, que solo 
mostramos si corresponde.*/
			/*
	let nombre; 
	let obraSocial;
	let edad; 
	let temperatura; 
	let sexo; 
	let seguir; 
	let contadorOSDE = 0; 
	let edadMinPAMI = 110; 
	let nombreEdadMin; 
	let temperaturaEdadMin; 
	let contadorPersonas = 0; 
	let costoTotal; 
	let contadorPAMI = 0; 
	let descuento; 
	let mensaje; 
	let mensaje1; 
	let mensaje2; 
	let bandera = 0; 
	const PRECIO = 600;
	
		
		do {
			do{
				nombre = prompt("Ingrese su nombre"); 
			}while(isNaN(nombre)==false);

			do{
				obraSocial = prompt("Ingrese obra social entre: PAMI/OSDE/otra");
			}while(obraSocial!="PAMI"&&obraSocial!="OSDE"&&obraSocial!="otra");

			do {
				edad = parseInt(prompt("Ingrese la edad. Solo mayor de 17 años"));
			}while(isNaN(edad)==true || edad < 18 || edad > 110);

			do {
				temperatura = parseFloat(prompt("Ingrese una temperatura valida"));
			}while (isNaN(temperatura)==true|| temperatura <33 || temperatura >44);

			do {
				sexo = prompt("Ingrese su sexo. Indique f, m ó nb(para no binario)");
			}while(sexo != "f" && sexo!="m" && sexo!= "nb");

			contadorPersonas++; //para punto c 

			switch(obraSocial){
				case "OSDE":
					if(edad > 60){ //punto a 
						contadorOSDE++; 
						mensaje = "Hay "+contadorOSDE+" personas con obra social OSDE mayor a 60 años"; 
					}
				break;
				case "PAMI": 
					if(sexo=="f"&&edad<edadMinPAMI || bandera == 0){ //punto b 
						edadMinPAMI = edad; 
						nombreEdadMin = nombre; 
						temperaturaEdadMin = temperatura; 
						mensaje1 = "La mujer mas joven con obra social PAMI es "+nombreEdadMin+" y su temperatura es de "+temperaturaEdadMin; 
						bandera = 1; 
					}
				contadorPAMI++; 
				break;
			}
			seguir = prompt("Desea seguir? Indique s/n"); 
		}while(seguir=="s");

		//para punto d 
		if(contadorPAMI>(contadorPersonas/2)){
			descuento = 25; 
		}
		//punto c 
		costoTotal = contadorPersonas * PRECIO; 
		//punto d
		costoDescuento = costoTotal - (costoTotal * descuento / 100); 
		mensaje2 = "El viaje con descuento por haber mas del 50% de personas pertenecientes a PAMI es "+costoDescuento;  

		document.write(mensaje+"<br>");
		document.write(mensaje1+"<br>");
		document.write("El costo total del viaje sin descuento es "+costoTotal+"<br>");
		document.write(mensaje2+"<br>");*/

	//diaz barbara 
	/* Simil Parcial 6:
Realizar el algoritmo que permita ingresar los datos de los alumnos de una división de la UTN FRA, los datos solicitados son:
Nombre(validar no sea numero)
Situación laboral ("buscando", "trabajando" o "solo estudiante")
Cantidad de materias(más de cero y menos de 8)
Sexo (femenino, masculino, no binario)
Nota promedio (entre 0 y 10)
Edad (validar entre 18 y 85 inclusive)
Se debe informar de existir, o informar que no existe, en el caso que corresponda.
a) El nombre del mejor promedio que no de los que trabajan o están buscando}
b) El nombre del más viejo de los alumnos que solo sea estudiantes
c) El promedio de nota por situación laboral
d) La edad y nombre del que cursa menos cantidad de materias y que esté buscando trabajo*/ 
/*
		let nombre; 
		let situacionLaboral; 
		let cantMaterias; 
		let sexo; 
		let nota; 
		let edad; 
		let seguir; 
		let notaMax = 0; 
		let nombreNotaMax; 
		let edadMax = 17; 
		let nombreEdadMax; 
		let acumNotaBuscando = 0; 
		let contadorBuscando = 0;
		let acumNotaTrabajando = 0;
		let contadorTrabajando = 0;
		let acumNotaEstudiante = 0; 
		let contadorEstudiante = 0; 
		let promedioNotaBuscando;
		let promedioNotaTrabajando;
		let promedioNotaEstudiante; 
		let cantMateriasMin = 9; 
		let mensajeA;
		let mensajeB;
		let mensajeC; 
		let mensajeD; 

		do {
			do{
				nombre = prompt("Ingrese su nombre"); 
			}while(isNaN(nombre)==false);

			do {
				situacionLaboral = prompt("Indique situacion laboral entre: buscando/trabajando/solo estudiante");
			}while(situacionLaboral!="buscando"&&situacionLaboral!="trabajando"&&situacionLaboral!="solo estudiante");

			do {
				cantMaterias = parseInt(prompt("Ingrese la cantidad de materias"));
			}while(isNaN(cantMaterias)==true||cantMaterias < 1 || cantMaterias > 8); 

			do {
				sexo = prompt("Ingrese su sexo. Indique f, m ó nb(para no binario)");
			}while(sexo != "f" && sexo!="m" && sexo!= "nb");

			do {
				nota = parseFloat(prompt("Ingrese la nota promedio"));
			}while(isNaN(nota)==true||nota < 0 || nota > 10);

			do {
				edad = parseInt(prompt("Ingrese la edad"));
			}while(isNaN(edad)==true || edad < 18 || edad > 85);

			//punto a
			if(situacionLaboral=="buscando"||situacionLaboral=="solo estudiante"&&nota>notaMax){
				nombreNotaMax = nombre; 
				mensajeA = "El nombre del mejor promedio de los que buscan trabajo o solo estudian es "+nombreNotaMax; 
			}
			//punto b
			if(situacionLaboral=="solo estudiante"&&edad>edadMax){
				nombreEdadMax = nombre; 
				mensajeB = "el nombre del mas viejo que solo estudia es "+nombreEdadMax;
			}

			switch(situacionLaboral){ //para punto c
				case "buscando":
					acumNotaBuscando = acumNotaBuscando + nota; 
					contadorBuscando++;
					//punto d
						if(cantMaterias<cantMateriasMin){
							nombreMateriaMin = nombre; 
							edadMateriaMin = edad; 
							mensajeD = "el nombre del que cursa menos materias y busca trabajo es "+nombreMateriaMin+" y tiene "+edadMateriaMin+" años"; 
						}
				break;
				case "trabajando":
					acumNotaTrabajando = acumNotaTrabajando + nota;
					contadorTrabajando++;
				break;
				case "solo estudiante":
					acumNotaEstudiante = acumNotaEstudiante + nota; 
					contadorEstudiante++;
				break; 
			}

			seguir = prompt("Desea seguir? Indique s/n"); 
		}while(seguir=="s"); 

		//punto c 
		promedioNotaBuscando = acumNotaBuscando / contadorBuscando; 
			mensajeC = "el promedio de nota por situacion buscando es "+promedioNotaBuscando; 
		promedioNotaTrabajando = acumNotaTrabajando / contadorTrabajando; 
			mensajeC = "el promedio de nota por situacion trabajando es "+promedioNotaTrabajando; 
		promedioNotaEstudiante = acumNotaEstudiante / contadorEstudiante; 
			mensajeC = "el promedio de nota por situacion solo esudiante es "+promedioNotaEstudiante; 
	
		document.write(mensajeA+"<br>");
		document.write(mensajeB+"<br>");
		document.write(mensajeC+"<br>");
		document.write(mensajeC+"<br>");
		document.write(mensajeC+"<br>");
		document.write(mensajeD+"<br>");*/

//diaz barbara
/* Simil Parcial 7:
Ingrese nombre,sexo,edad (validar que si es mujer debe ser adolescente y si el hombre debe ser niño),altura (validar),temperatura corporal(validar)
Necesitamos saber:
  a)el nombre y el sexo de la persona con mas temperatura,
  b)de las mujeres el nombre de la mas joven ,
  c)de los hombre el nombre del mas bajito,
  ... solo si los hay
  d)el promedio de edad entre los hombres,
  e)el promedio de edad entre las mujeres,
  f)la cantidad de personas que miden mas de 1,60 metros,  
  g)el porcentaje de mujeres sobre el total de personas de mas de 1,60 mts.*/
		/*
		let nombre;
		let sexo; 
		let edad; 
		let altura;
		let temperatura; 
		let seguir; 
		let temperaturaMax = 32;
		let nombreTempMax;
		let sexoTempMax;
		let edadMujerMin = 18;
		let nombreMujerMin; 
		let alturaMin = 221;
		let nombreHombreMin; 
		let acumEdadHombre = 0;
		let contadorEdadHombre = 0; 
		let acumEdadMujer = 0;
		let contadorEdadMujer = 0; 
		let promedioHombre;
		let promedioMujer;  
		let contadorPersonasAltas = 0; 
		let contMujeresAltas = 0; 
		let porcentaje; 

		do {
			do{
				nombre = prompt("Ingrese su nombre"); 
			}while(isNaN(nombre)==false);

			do {
				sexo = prompt("Ingrese su sexo. Indique f/m");
			}while(sexo != "f" && sexo!="m");

			do {
				edad = prompt("Ingrese su edad si es 'f' y adolescente o si es 'm' y niño");
			}while(isNaN(edad)||edad <1||edad>18);
			//validaciones
			while(sexo=="m"&&edad>13){
				edad = parseInt(prompt("Error.Ingrese su edad solo si es 'f' y adolescente o si es 'm' y niño"));
			}
			while(sexo=="f"&&edad<13||edad>18){
				edad = parseInt(prompt("Error.Ingrese su edad solo si es 'f' y adolescente o si es 'm' y niño"));
			}

			do{
				altura = parseFloat(prompt("Ingrese su altura en cm"));
			}while(isNaN(altura)==true||altura<30||altura>220);

			do{
				temperatura = parseFloat(prompt("Ingrese una temperatura valida")); 
			}while(isNaN(temperatura)==true||temperatura<33||temperatura>42);
			//para el punto d 
			switch(sexo){
				case "m":
					acumEdadHombre = acumEdadHombre + edad; 
					contadorEdadHombre++;
						if(altura<alturaMin){//punto c
							nombreHombreMin = nombre; 
						}
				break; 
				case "f":
					acumEdadMujer = acumEdadMujer + edad; 
					contadorEdadMujer++; 
						if(edad<edadMujerMin){ //punto b
							nombreMujerMin = nombre;
						}
						if (altura>160){
							contMujeresAltas++;
						}
				break; 
			}

			//punto a 
			if(temperatura>temperaturaMax){
				temperaturaMax = temperatura; 
				nombreTempMax = nombre; 
				sexoTempMax = sexo; 
			}
			//punto f
			if(altura>160){
				contadorPersonasAltas++; 
			}

			seguir = prompt("Desea seguir? Indique s/n"); 
		}while(seguir=="s"); 

		//punto d
		promedioHombre = acumEdadHombre / contadorEdadHombre; 
		//punto e 
		promedioMujer = acumEdadMujer / contadorEdadMujer;  
		//punto g 
		porcentaje = contMujeresAltas * 100 / contadorPersonasAltas; 

		document.write("el nombre de la persona con mas temperatura es "+nombreTempMax+" y el sexo de esa persona es "+sexoTempMax+"<br>");
		document.write("el nombre de la mujer mas joven es "+nombreMujerMin+"<br>");
		document.write("el nombre del hombre mas bajito es "+nombreHombreMin+"<br>");
		document.write("el promedio de edad entre los hombres es "+promedioHombre+"<br>");
		document.write("el promedio de edad entre las mujeres es "+promedioMujer+"<br>");
		document.write("la cantidad de personas que miden mas de 160 cm es "+contadorPersonasAltas+"<br>");
		document.write("el porcentaje de mujeres sobre el total de personas de mas de 160 cm es "+porcentaje.toFixed(2)+"<br>"); */

	//diaz barbara
	/* Simil Parcial 8:
Para un censo municipal debemos cargar los datos de TODAS las mascotas de nuestra veterinaria
necesitan saber si es un gato o un perro u "otra cosa"(solo hay esos tres tipos)
el tipo de pelaje (corto, largo, sin pelo),
la edad de la mascota (edad validada);
el nombre (una palabra)
la raza (una palabra)
el peso (peso validado)
el estadoClinico (enfermo, internado o adopción)
la temperaruta corporal y nos piden informar solo si existe
a)El perro más pesado
b)El porcentaje de enfermos sobre el total de mascotas
c)El nombre de la última mascota de tipo "otra cosa"
d)El animal sin pelo con menor temperatura corporal
e)Qué tipo de mascota(gato o un perro u "otra cosa") que tiene el mayor promedio de temperatura corporal
f)Sumando gatos y perros que porcentaje del total de mascotas son?
g)Qué estado clínico tiene la menor cantidad de mascotas   
H)Cuál es el promedio de kilos de peso, tomando todas las mascotas
i)El nombre y raza del gato sin pelos más liviano*/

		let tipo;
		let pelaje; 
		let edad; 
		let nombre;
		let raza; 
		let peso; 
		let estadoClinico;
		let temperatura; 
		let seguir; 

		do {
			do {
				tipo = prompt("Indique si es gato/perro/otro"); 
			}while(tipo!="gato"&&tipo!="perro"&&tipo!="otro");

			do {
				pelaje = prompt("Indique el tipo de pelaje: corto/largo/sin pelo");
			}while(pelaje!="corto"&&pelaje!="largo"&&pelaje!="sin pelo");

			switch(tipo){
				case "perro": 
					do {
						edad = parseInt(prompt("Ingrese la edad de la mascota. Si es perro o gato hasta 20 años, para 'otro' hasta 100 años")); 
					}while(isNaN(edad)==true || edad<0||edad>20);

				break; 
				case "gato":
					do {
						edad = parseInt(prompt("Ingrese la edad de la mascota. Si es perro o gato hasta 20 años, para 'otro' hasta 100 años")); 
					}while(isNaN(edad)==true || edad<0||edad>20);
				break;
				case "otro": 
					do {
						edad = parseInt(prompt("Ingrese la edad de la mascota. Si es perro o gato hasta 20 años, para 'otro' hasta 100 años")); 
					}while(isNaN(edad)==true || edad<0||edad>100);
				break;
			}
			
			do{
				nombre = prompt("Ingrese su nombre"); 
			}while(isNaN(nombre)==false);

			do{
				raza = prompt("Ingrese su raza"); 
			}while(isNaN(raza)==false);

			do {
				peso = parseFloat(prompt("Ingrese el peso de su mascota (peso razonable)"));
			}while(isNaN(peso)==true|| peso <0 || peso >83); 

			do {
				estadoClinico = prompt("Indique el estado clinico: enfermo/internado/adopcion");
			}while(estadoClinico!="enfermo"&&estadoClinico!="internado"&&estadoClinico!="adopcion"); 

			do {
				temperatura = parseFloat(prompt("Ingrese la temperatura")); 
			}while(isNaN(temperatura)==true); 

			

			seguir = prompt("Desea seguir ingresando? Indique s/n"); 
		}while(seguir=="s"); 


}
