//Diaz Barbara 
//TP 2

/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let ingresoLargo; 
    let ingresoAncho;
    let perimetro; 
    let incluyoHilosDeAlmbre;

    ingresoLargo= parseFloat(document.getElementById("txtIdLargo").value); 
    ingresoAncho= parseFloat(document.getElementById("txtIdAncho").value); 
    perimetro= ( 2 * ingresoAncho) + ( 2 * ingresoLargo); 
    incluyoHilosDeAlmbre= perimetro * 3; 
    alert("Debe comprar " + incluyoHilosDeAlmbre + " metros de alambre"); 

}
function Circulo () 
{
    let ingresoRadio; 
    let perimetro; 
    let incluyoHilosDeAlmbre; 
    const PI= 3.1415; 

    ingresoRadio= parseFloat(document.getElementById("txtIdRadio").value); 
    perimetro= ( PI * 2 * ingresoRadio); 
    incluyoHilosDeAlmbre= perimetro * 3;
    alert("Debe comprar " + incluyoHilosDeAlmbre.toFixed(2) + " metros de alambre"); 	
}
function Materiales () 
{
	let ingresoLargo;
    let ingresoAncho; 
    let areaDelRectangulo; 
    let calculoBolsasDeCemento;
    let calculoBolsasDeCal;
    const BOLSASDECEMENTO= 2;
    const BOLSASDECAL= 3; 
    
    ingresoLargo= parseFloat(document.getElementById("txtIdLargo").value); 
    ingresoAncho= parseFloat(document.getElementById("txtIdAncho").value);
    areaDelRectangulo= ingresoLargo * ingresoAncho;
    calculoBolsasDeCemento= BOLSASDECEMENTO * (areaDelRectangulo);
    calculoBolsasDeCal= BOLSASDECAL * (areaDelRectangulo); 
    alert("Usted debe comprar " + calculoBolsasDeCemento + " bolsas de cemento y " + 
    calculoBolsasDeCal + " bolsas de cal"); 
}