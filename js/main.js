$(function(){
    $('.delivery__slider').slick({
     dots: false,
     fade: true
    });
});

/*меню бургер*/
let hamb = document.querySelector('.hamb');
let hambPopup = document.querySelector('.hamb-popup');
let body = document.body
hamb.addEventListener('click', function(){
  hambPopup.classList.toggle('open');
  hamb.classList.toggle('clicked');
  body.classList.toggle('noscroll');
})

const hambLinks = document.querySelectorAll('.hamb-link')
for(let hambLink of hambLinks){
  hambLink.addEventListener('click', function(){
      hambPopup.classList.toggle('open');
      hamb.classList.toggle('clicked');
      body.classList.toggle('noscroll');
  })    
}

/*плавная прокрутка*/
const anchors = document.querySelectorAll('a.scroll-to')
for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
      e.preventDefault()
      let href = this.getAttribute('href').substring(1);
      const scrollTarget = document.getElementById(href);
      const topOffset = document.querySelector('.header__top').offsetHeight;
      const elementPosition = scrollTarget.getBoundingClientRect().top;
      const offsetPosition = elementPosition;
      window.scrollBy({
          top: offsetPosition,
          behavior: 'smooth'
      })
    })
  }