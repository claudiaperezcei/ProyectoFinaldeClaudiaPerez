// DECLARACIÓN DE VARIABLES
// declaración de variable --> tab y tabContents para dar funcionalidad a las pestañas de la sección de servicios y que estas se activen y muestren su contenido
const tabs = document.querySelectorAll('.tab')
const tabContents = document.querySelectorAll('.tab__content')
// declaración de variable --> btn__swipeUp para dar funcionalidad al botón que llevará al inicio de cada pag. 
const btnSwipeUp = document.getElementById('btn__swipeUp')
// declaración de variables --> Para activar/desactivar el menu responsive 
const menu = document.querySelector('#menu')
const menuOpen = document.querySelector('#menu__open')
const menuClose = document.querySelector('#menu__close')
// declaración de variable --> clase appear, dará funcionalidad de que vayan apareciendo los elementos con esa clase, cuando se haga scroll. 
let appearElement = document.querySelectorAll('.appear')
// Declaración de variable --> banner, para posteriormente realizar las animaciones con intervalos
let banner = document.querySelector('.banner')
// Declaración de variable --> layer__overlay, para superponer la capa al banner
let overlay = document.querySelector('.layer__overlay')
// se define un array con las rutas de las imágenes para animar la galería del banner
let bannerGallery = [
    './media/cultureGirlBanner.webp',
    './media/landscapesMachupichu.webp',
    './media/couplesOne.webp',
    './media/portraitBoy.webp'
]
// se inicia el contador a 0 para llevar la cuenta de la imagen actual
let counter = 0
// FUNCIONES
// se hará un recorrido a todos los elementos con la variable tab
tabs.forEach(tab => {
    // Escuchador de eventos --> click, cuando escuche el click en cada tab, llamará la función. Después se declara la variable --> target, recogiendo el valor del atributo de data-target, para que se muestre el contenido. Se ha optimizado el código
    tab.addEventListener('click', () => { const target = tab.dataset.target;
    //se añade la clase active del tab al que se ha hecho click
    tab.classList.add('active')  
    // quita la clase active de los contenidos, para ocultarlos. Se ha optimizado el código
    tabContents.forEach(content => content.classList.remove('active')) 
    // muestra el contenido correspondiente       
    document.getElementById(target).classList.add('active')
  })
})
// Funcionalidad para que cuando se haga click al botón swipeup, la página se desplace hacia arriba. gracias a esto aporta más funcionalidad para el usuario. Se ha optimizado el código
btnSwipeUp.addEventListener('click', () => { window.scrollTo({ top: 0, behavior: 'smooth' })})
// Funcionalidad para activar la visibilidad del menu responsive para los otros dispositivos
//através del escuchador de eventos --> click, cuando este escuche el click en el boton menuOpen, llamará la función y añade la clase --> visible, al elemento del menu, para que se muestre el contenido. Se ha optimizado el código
menuOpen.addEventListener('click', () => { menu.classList.add("visible") })
//Escuchador de eventos --> click, cuando escuche el click en el boton menuClose, llamará la función y elimina la clase --> visible, al elemento del menu, para que se oculte el contenido. Se ha optimizado el código
menuClose.addEventListener('click', () => { menu.classList.remove("visible") })
// Funcionalidad con el escuchador de eventos para que cuando se haga scroll, los elementos con la clase appear, vayan apareciendo y viceversa. 
window.addEventListener('scroll', () => {
    appearElement.forEach((appear) => {
        // Obtiene las coordenadas del elemento en relación con la ventana del navegador
        if (appear.getBoundingClientRect().top < window.innerHeight - 200) {
            // Si el elemento está dentro del área visible, es visible
            appear.style.opacity = '1'
        }else {
            // Si el elemento no está dentro del área visible, elimina el estilo en línea
            appear.removeAttribute('style')
        }
    })
})
// Se establece un intervalo de tiempo que se ejecutará cada 3000 milisegundos (3s)
setInterval(() => {
    setTimeout(() => { //Se establece un timeout que se ejecutará después de 100 milisegundos
        overlay.style.opacity = 0; //se oculta el overlay
        banner.style.backgroundImage = 'none'; //se elimina la img actual, para poder cargar después la nueva
    }, 100);
    setTimeout(() => {
        counter++; //se incrementa el contador
        if (counter >= bannerGallery.length) { //se comprueba con una condicional, si el contador ha realizado todo el recorrido del array.
            counter = 0; //si es así, el contador es 0
        }        
        banner.style.backgroundImage = `url(${bannerGallery[counter]})`; //se establece la nueva img de fondo, correspondiente al contador
        banner.style.backgroundRepeat = 'no-repeat';
        banner.style.backgroundSize = 'cover';
        banner.style.backgroundPosition = 'center';
        overlay.style.opacity = 1; //se visualiza la capa overlay
    }, 150);
}, 3000); //tiempo de transición
