/* Bienvenidos (SWITCH).
pedir el ingreso de un planeta del sistema solar
Si es la tierra mostrar "acá vivimos".
Si está más cerca del sol, "acá hace más calor".
Si está más lejos del sol, "acá hace más frio".
Si no es un planeta valido informarlo.
Aclaración: los planetas se ingresan en minúscula (Mercurio y Venus están antes que la tierra).*/ 

function mostrar()
{
    let planetas; 
    let mensaje; 

    do {
        planetas= prompt("Ingrese un planeta valido");
    }while(isNaN(planetas)==false);

    switch(planetas){
        case "tierra": 
            mensaje = "aca vivimos";
        break;
        case "mercurio":
        case "venus":
            mensaje = "aca hace mas calor";
        break;
        case "marte":
        case "jupiter":
        case "saturno":
        case "urano":
        case "neptuno":
            mensaje = "aca hace mas frio"; 
        break; 
        default:
            mensaje = "no ingresó un planeta válido"; 
    }

    alert (mensaje); 

}
