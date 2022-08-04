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

/*кнопка наверх*/
const upScroll = document.querySelector('.up-btn');

window.addEventListener('scroll', function(){
  upScroll.classList.toggle('active', window.scrollY>500)
})
upScroll.addEventListener('click', function(){
  window.scrollTo({
    top: 0,
    behavior: "smooth"
})  
}) 

/*модальное окно*/

const contactBtn = document.querySelector('.header__btn');
const modal = document.querySelector('.modal')
const modalWrap = document.querySelector('.modal__wrap')
const closeModal = document.querySelector('.close')
const modalBody = document.querySelector('.modal__body')

contactBtn.addEventListener('click', function(e){
  e.preventDefault();
  modal.classList.add('active');
  modalBody.classList.add('active');
  body.classList.add('noscroll');
})
closeModal.addEventListener('click', function(){
  modal.classList.remove('active');
  modalBody.classList.remove('active');
  body.classList.remove('noscroll');
})

window.addEventListener('click', function(e){
  if (e.target == modalWrap) {
      modal.classList.remove('active');
      modalBody.classList.remove('active');
      body.classList.remove('noscroll');
  } 
})