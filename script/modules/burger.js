const tabsBtnsWrapper = document.querySelector('.header__menu-button');
const tabsBtns = document.querySelector('.header__menu');
let colorInterval;

const changeColor = () => {
  clearInterval(colorInterval);
  let isDefault = true;
  colorInterval = setInterval(() => {
    tabsBtns.style.background = isDefault ? '#228B22' : '#FCB500';
    tabsBtns.style.color = isDefault ? '#000000' : '#FFFFFF';
    isDefault = !isDefault
  }, 3000);
};

const resetColor = () => {
  clearInterval(colorInterval);
  tabsBtns.style.background = '#FCB500';
  tabsBtns.style.color = '#FFFFFF';
};

document.addEventListener('click', ({target}) => {
  if(target === tabsBtnsWrapper){
    tabsBtns.classList.toggle('header__menu_active');
    if (tabsBtns.classList.contains('header__menu_active')) {
      requestAnimationFrame(changeColor);
    } else {
      resetColor();
    };
  } else if (target !== tabsBtns) {
    tabsBtns.classList.remove('header__menu_active');
    resetColor();
  };
});



