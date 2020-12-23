/**
 * Author Rodrigo Ivan Figueroa Popoca
 * Vanilla.js
 */

// Evento de load al estar completamente cargada la página
window.addEventListener( 'load', () => {
  let cards = Array.from( document.querySelectorAll('.card') ),
      conta = document.querySelector( '#contact' )
  animationsFirstEntry()
  cards.forEach( itm => itm.addEventListener( 'click', function(e){ 
        modals( itm.querySelector('h2').textContent )
      } ) 
    )
    conta.addEventListener( 'click', (e) => {
      modals( e.target.textContent )
    })
})
// ALgunas animaciones de entrada para el texto y el botón
const animationsFirstEntry = () => {
  let btn  = document.querySelector( '#cta' ),
      aro  = document.querySelector( '.first_section article' ),
      inf  = document.querySelector( '.info' ).getBoundingClientRect().top

    gsap.to(aro, { 
        duration: 2, y: '500', 
        ease: 'power4' 
      })
    
    btn.addEventListener( 'click', () => {
      gsap.to( window, { 
        duration: 2,
        scrollTo: inf + 20
      });
    })
}
// funcion de modales para las cards y el botón de cta
const modals = info => {
  let modal = document.querySelector( '.modal' ),
      h2    = document.querySelector( '.modal h2' ),
      crss  = {},
      mdAc  = {}
      modal.classList.add( 'active' )
      h2.textContent = `Info about ${info ? info : ''}`
      mdAc  = document.querySelector( '.modal.active' )
      crss  = mdAc.querySelector('.close')
      crss.addEventListener( 'click', function(){
        this.parentNode.parentNode.classList.remove( 'active' )
      } )
}