// DECLARACIÓN DE VARIABLES

// declaración de variable --> tab y tabContents para dar funcionalidad a las pestañas de la sección de servicios y que estas se activen y muestren su contenido
const tabs = document.querySelectorAll('.tab')
const tabContents = document.querySelectorAll('.tab__content')
// declaración de variables --> Para activar/desactivar el menu responsive 
const menu = document.querySelector('#menu')
const menuOpen = document.querySelector('#menu__open')
const menuClose = document.querySelector('#menu__close')

// declaración de variable --> clase appear, dará funcionalidad de que vayan apareciendo los elementos con esa clase, cuando se haga scroll. 
let appearElement = document.querySelectorAll('.appear')

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
// Funcionalidad para que cuando se haga click al botón swipeup, la página se desplace hacia arriba. gracias a esto aporta más funcionalidad para el usuario
document.getElementById('btn__swipeUp').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
})
// Funcionalidad para activar la visibilidad del menu responsive para los otros dispositivos
//Escuchador de eventos --> click, cuando escuche el click en el boton menuOpen, llamará la función y añade la clase --> visible, al elemento del menu, para que se muestre el contenido. Se ha optimizado el código
menuOpen.addEventListener('click', () => { menu.classList.add("visible") })
//Escuchador de eventos --> click, cuando escuche el click en el boton menuClose, llamará la función y elimina la clase --> visible, al elemento del menu, para que se oculte el contenido. Se ha optimizado el código
menuClose.addEventListener('click', () => { menu.classList.remove("visible") })

// Funcionalidad para que cuando se haga scroll, los elementos con la case appear, vayan apareciendo y viceversa. 
window.addEventListener('scroll', () => {
    appearElement.forEach((appear) => {
        if (appear.getBoundingClientRect().top < window.innerHeight - 200) {
            appear.style.opacity = '1'
        }else {
            appear.removeAttribute('style')
        }
    })
})

