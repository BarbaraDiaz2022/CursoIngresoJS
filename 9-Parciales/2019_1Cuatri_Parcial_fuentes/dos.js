/* A una pareja se le pide los datos para mostrar un mensaje " ustedes se llaman xxxxx y xxxx
pesan xx y xx kilos, que sumados son xx kilos y el promedio de peso xx ".*/

function mostrar()
{
  let nombre1;
  let nombre2;
  let peso1; 
  let peso2; 
  let mensaje; 
  let suma;
  let promedio;

  nombre1 = prompt("Ingrese su nombre");
  nombre2 = prompt("Ingrese el nombre de su pareja");
  peso1 = parseFloat(prompt ("Ingrese su peso"));
  peso2 = parseFloat(prompt("Ingrese el peso de su pareja"));
  suma = peso1 + peso2; 
  promedio = suma / 2; 

  mensaje = "ustedes se llaman "+nombre1+" y "+nombre2+", pesan "+peso1+" kg y "+peso2+" kg, que sumados son "+suma+" kg y el promedio de peso es "+promedio;

  alert (mensaje); 

}
