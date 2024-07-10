// DECLARACIÓN DE VARIABLES
// Para la funcionalidad de que aparezca cuando haga scroll
let appearElement = document.querySelectorAll('.appear')
// para la funcionalidad de las pestañas de la sección de servicios
const tabs = document.querySelectorAll('.tab')
const tabContents = document.querySelectorAll('.tab__content')
// Para activar/desactivar el menu responsive 
const menu = document.querySelector('#menu')
const menuOpen = document.querySelector('#menu__open')
const menuClose = document.querySelector('#menu__close')

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
// Funcionalidad para que las pestañas de sección de servicios se activen
tabs.forEach(tab => {
    // OPTIMIZACIÓN ARROW
  tab.addEventListener('click', () => { const target = tab.dataset.target;    
    tab.classList.add('active')
    // OPTIMIZACIÓN ARROW + HANDLER
    tabs.forEach(flap => flap.classList.remove('active'))         
    tabContents.forEach(content => content.classList.remove('active'))    
    document.getElementById(target).classList.add('active')
  })
})
// Funcionalidad para que cuando se haga click al botón swipeup, la página se desplace hacia arriba. gracias a esto aporta más funcionalidad para el usuario
document.getElementById('btn__swipeUp').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
})
// Funcionalidad para activar la visibilidad del menu responsive para los dispositivos
// OPTIMIZACIÓN ARROW
menuOpen.addEventListener('click', () => { menu.classList.add("visible") })
menuClose.addEventListener('click', () => { menu.classList.remove("visible") })


