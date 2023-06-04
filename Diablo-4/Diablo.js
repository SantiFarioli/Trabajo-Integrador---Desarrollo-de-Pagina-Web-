let Slider = document.querySelector(".slider");
let IconoDerecho = document.querySelector(".icono-derecho");
let IconoIzuierdo = document.querySelector(".icono-izquierdo");
let Imagenes = document.querySelectorAll(".img-slider").length;
let Contador = 0;

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