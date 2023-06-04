var Slider = document.querySelector(".slider");
var IconoDerecho = document.querySelector(".icono-derecho");
var IconoIzuierdo = document.querySelector(".icono-izquierdo");
var Imagenes = document.querySelectorAll(".img-slider").length;
var Contador = 0;

function MoverDerecha()
  {
    Contador++;
    if(Contador > Imagenes - 1)
        {
          Contador = 0;
        }             
    Slider.style.transition = "all 1s ease"
    Slider.style.marginLeft = `-${100 * Contador}%`;
  }
  IconoDerecho.addEventListener("click", MoverDerecha);

 
function MoverIzquierda()
  {
    Contador--;
    if(Contador < Imagenes - 1)
        {
          Contador = 0;
        }
    Slider.style.transition = "all 1s ease"
    Slider.style.marginLeft = `-${100 * Contador}%`;             
  }
IconoIzuierdo.addEventListener("click", MoverIzquierda)