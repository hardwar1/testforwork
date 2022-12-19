document.addEventListener("DOMContentLoaded", function () {
  function qOne(selector) {
    return document.querySelector(selector);
  }

  function qAll(selector) {
    return document.querySelectorAll(selector);
  }

  const
    burger = qOne('.nav-bar-burger'),
    burgerFixed = qOne('.nav-bar-fixed'),
    menu = qOne('.nav-bar'),
    overlay = qOne('.overlay'),
    managementBtn = qOne('.management__btn'),
    popapCreatShop = qOne('.popap-creat-shop'),
    popupBurger = qOne('.popup__burger')
    ;

    overlay.addEventListener("click", ()=> closeOverlay())

  function showOverlay() {
    overlay.classList.add('active');
    
  }

  function closeOverlay() {
    overlay.classList.remove('active');
    jsActive = qAll('.js-active');
    burger.classList.remove('burger--close');
    for (const i of jsActive) {
      i.classList.remove('active')
    }
  }

  burger.addEventListener('click', function () {
    closeOverlay();
    this.classList.toggle('burger--close');
    burgerFixed.classList.toggle('active');
    menu.classList.toggle('active');
    overlay.classList.toggle('active');
  });

  menu.addEventListener('click', function () {
    this.classList.remove('burger--close');
    burgerFixed.classList.remove('active');
    menu.classList.remove('active');
    closeOverlay();
  });

  managementBtn.addEventListener('click',()=> {
    popapCreatShop.classList.add('active');
    showOverlay();
  });

  popupBurger.addEventListener('click',()=> closeOverlay());




});