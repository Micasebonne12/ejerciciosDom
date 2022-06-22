/* 2. Agregar un botón al html con la leyenda “Saludar”, que al cliquearlo (onclick) salte un 
alert diciendo “hola”. */
saludar = () =>{
    alert("Hola!")
}

/* 3. Agregar otro botón al html con la leyenda “Cambiar Fondo” que al cliquearlo (onclick) 
cambie el color del fondo del body (document.body.style.background) por “green”.  */
cambiaFondo = () =>{
    document.body.style.background = "green";
}

/* 4. Agregar una imagen cualquiera a la página, que al pasar el mouse por esta, se 
imprima por consola (“estoy viendo la imagen”);  */
hoverImg = () =>{
    console.log("Estoy viendo la imagen");
}

/* 5. Agregar otra imagen cualquiera a la página, que al hacer click con el mouse en esta, 
utilizando addEventListener, se imprima por consola (“estoy cliqueando la imagen”). */
let img = document.querySelector('.img')

img.addEventListener('click', function(e){
    console.log("Estoy clickeando la imagen");
    console.log("posición X: ",e.pageX,
    "posición Y: ", e.pageY)
    });


/* 6. Definir un addEventListener de forma tal que al hacer click en cualquier lado del 
body de la página (document.body), cambie el color de fondo de todo el body a rojo. 
Utilizar el this de la función del evento para esto. 
 */
let colorFondo = () =>{
  document.body.style.background = 'red';  
}

/* 7. El usuario medio vueltero nos pide ahora remover este listener recientemente creado 
ya que no puede interactuar bien con la página.*/
document.body.addEventListener('click',colorFondo);
document.body.removeEventListener('click',colorFondo);

/*8. Crear un formulario básico con un action que redirija a www.google.com.ar. Con 
Javascript hacer que al hacer click en Enviar no se envíe el formulario, sino que salte 
un alert diciendo “No se puede realizar este envío”. */
let form = document.querySelector('form');

form.addEventListener('submit', function(e){
    e.preventDefault();
    alert("No se puede realizar este envío");
})

/*9. Al addEventListener creado en la imagen, agregarle que imprima en consola la 
ubicación del mouse en x e y. */

/* EJERCICIOS CON TIMERS */

//1. En una página HTML básica, (se puede utilizar la misma de Eventos), que pasado 
//10 segundos en la página, aparezca un alert que diga “tiempo!” 

/* const repetirCadaDiezSegundos = setInterval(function(){
  alert("Tiempo!");
}, 10000); */
//2. Que aparezca un alert que diga “intervalo” cada 5 segundos en la página. 
/* const repetirCadaCincoSegundos = setInterval(function(){
  alert("Intervalo")
}, 5000);
 */

//3. Hacer que solamente aparezca una vez sola el alert del ejercicio 1 y 2 
// Se cambian los setInterval de los ejercicios anteriores, por setTimeOut para que se ejecute una sola vez
const repetirCadaDiezSegundos = setTimeout(function(){
  alert("Tiempo!");
}, 10000);
const repetirCadaCincoSegundos = setTimeout(function(){
  alert("Intervalo")
}, 5000);