const tabsBtnsWrapper = document.querySelector('.header__menu-button');
const tabsBtns = document.querySelector('.header__menu');

document.addEventListener('click', ({target}) => {
  if(target === tabsBtnsWrapper){
    tabsBtns.classList.toggle('header__menu_active');
  } else if (target !== tabsBtns) {
    tabsBtns.classList.remove('header__menu_active');
  };
});