//1. Realizar un sitio que tenga un solo botón diciendo “Clickeame” y que al clickearlo: 

//a. Muestre un alert 
//b. Cambie el color de fondo del sitio a rojo 

/* alerta = () => {
    alert("Soy una alerta");
    document.body.style.background = "red";
} */

//c. Cambie el color del sitio a un color al azar 
/* generarNumero = (numero) =>{
   return (Math.random()*numero).toFixed(0);
}

colorRGB = () =>{
   var color = "("+generarNumero(255)+"," + generarNumero(255) + "," + generarNumero(255) +")";
   console.log("rgb"+color);
   return "rgb" + color;
}

//d. Cambie el color del sitio a un color al azar que no puede ser el mismo que el anterior 

var color;

cambiarFondo = () =>{
       let colorNuevo = colorRGB();
   if(colorNuevo != color){
       document.body.style.background = colorNuevo;
       color = colorNuevo;
   }else {
       color = colorRGB();
       document.body.style.background = color;
       console.log("Eran iguales");
   }
   }
*/

//e. Alterne el color de fondo entre rojo y azul 
//f. Agregue un nuevo párrafo diciendo “Click número N​” 

var contador = 1;

cambiarFondo = () => {
    document.body.classList.toggle('blue');
    updateContador(contador++);
}

function updateContador(val) {
    document.getElementById("parrafo-contador").innerHTML = `Click número: ${val}`;
}