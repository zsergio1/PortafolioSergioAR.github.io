//Función que me aplica el estilo a la opciòn seleccionada y quita la previamente seleccionada
function seleccionar(link) {
    var opciones = document.querySelectorAll('#links  a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado";

    //Hacemos desaparecer el menu una vez que se ha seleccionado una opcion
    //en modo responsive
    var x = document.getElementById("nav");
    x.className = "";
}

//función que muestra el menu responsive
function responsiveMenu() {
    var x = document.getElementById("nav");
    if (x.className === "") {
        x.className = "responsive";
    } else {
        x.className = "";
    }
}

//detecto el scrolling para aplicar la animación del la barra de habilidades
window.onscroll = function() { efectoHabilidades() };

//funcion que aplica la animación de la barra de habilidades
function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("js").classList.add("barra-progreso2");
        document.getElementById("bd").classList.add("barra-progreso3");
        document.getElementById("ps").classList.add("barra-progreso4");
    }

}
// Función para abrir la ventana modal document.addEventListener('DOMContentLoaded', () => {
  /* const openModal = document.querySelector('.modal__button');
   const modal = document.querySelector(' .modal');
   const closeModal = document.querySelector('.close__modal');

   openModal.addEventListener('click', () => {
     modal.classList.add('modal-show');
   });
   closeModal.addEventListener ('click', (e) => {
     e.preventDefault();
     modal.classList.remove('modal-show');
   })*/
   // Obtén todos los botones "Ver Clase"
const modalButtons = document.querySelectorAll('.modal__button');

// Obtén todas las ventanas modales
const modals = document.querySelectorAll('.modal');

// Obtén todos los botones "Cerrar Modal"
const closeModalButtons = document.querySelectorAll('.close__modal');

// Agrega un evento de clic a cada botón "Ver Clase" para mostrar su ventana modal correspondiente
modalButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    modals[index].classList.add('modal-show');
  });
});

// Agrega un evento de clic a cada botón "Cerrar Modal" para ocultar la ventana modal correspondiente
closeModalButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    modals[index].classList.remove('modal-show');
  });
});
modals.forEach((modal) => {
  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.classList.remove('modal-show');
    }
  });
});


   




 