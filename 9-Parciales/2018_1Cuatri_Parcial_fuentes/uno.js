/* Realizar el algoritmo que pida el ancho y el largo de un rectángulo por prompt y que muestre
el perímetro por alert.*/
function mostrar()
{
    let ancho; 
    let largo; 
    let perimetro; 
    let mensaje; 

        ancho = parseFloat(prompt("Ingrese el ancho del rectangulo"));
        largo = parseFloat(prompt("Ingrese el largo del rectangulo")); 
        perimetro = (ancho * 2) + (largo * 2); 
        mensaje = "El perimetro del rectangulo es "+perimetro;

        alert(mensaje);



}
