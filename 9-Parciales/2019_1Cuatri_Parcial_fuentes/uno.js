/* Realizar el algoritmo que pida los datos necesarios para un triángulo equilátero por prompt y
que muestre el perímetro por alert.*/
function mostrar()
{
    let lado; 
    let perimetro;
    let mensaje; 

    lado = parseFloat(prompt("Ingrese la medida en cm de uno de los lados del triangulo equilatero"));
    perimetro = 3 * lado; 
    mensaje = "El perimetro de su triangulo equilatero es "+perimetro; 

    alert (mensaje); 

}
