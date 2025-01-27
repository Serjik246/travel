const docEl = document.documentElement;
const airplane = document.createElement('div');
let lastScroll = window.pageYOffset;

airplane.style.cssText = `
  position: fixed;
  width: 50px;
  height: 50px;
  right: 0;
  bottom: 0;
  pointer-events: none;
  background: url('img/airplane.svg') center/contain no-repeat;
  transform: rotate(0deg);
`;

const width = () => {
  docEl.clientWidth >= 758 
    ? document.body.append(airplane) 
    : airplane.remove();
};

const rotatePlane = () => {
  let currentScroll = window.pageYOffset;

  if (currentScroll > lastScroll) {
    airplane.style.transform = 'rotate(0deg)';
} else if (currentScroll < lastScroll) {
  airplane.style.transform = 'rotate(180deg)';
};

  lastScroll = currentScroll;
};

const calcPositionPlane = () => {
  const maxTop =  docEl.clientHeight - airplane.clientHeight;
  const maxScroll =  docEl.clientHeight - docEl.scrollHeight;
  const percentScroll = (window.pageYOffset * 100) / maxScroll;

  const bottom = - maxTop * (percentScroll / 100);

  airplane.style.bottom = `${bottom}px`;
};

width()
window.addEventListener('resize', width)
window.addEventListener('scroll', () => {
  requestAnimationFrame(calcPositionPlane)
  requestAnimationFrame(rotatePlane)
});