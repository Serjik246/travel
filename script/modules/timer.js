import {heroTimer, heroText} from './elements.js'; 

export const timer = deadline => {
  const timerCountkDay = heroTimer.querySelector('.timer__count_days');
  const timerCountHour = heroTimer.querySelector('.timer__count_hours');
  const timerCountMin = heroTimer.querySelector('.timer__count_minutes');

  const timerUnitkDay = heroTimer.querySelector('.timer__units_days');
  const timerUnitHour = heroTimer.querySelector('.timer__units_hours');
  const timerUnitMin = heroTimer.querySelector('.timer__units_minutes');

  const getTimeRemaining = () => {
    const dateStop = Date.parse(deadline);
    const dateNow = Date.now();
    const timeRemaining = dateStop - dateNow;

    const days = Math.floor(timeRemaining / 1000 / 60 / 60 / 24);
    const hours = Math.floor(timeRemaining / 1000 / 60 / 60 % 24);
    const minutes = Math.floor(timeRemaining / 1000 / 60 % 60);

    return {timeRemaining, days, hours, minutes};
  };

  const declensionTime = (count, num) => {
    const a = ['день', 'час', 'минута'];
    const b = ['дня', 'часа', 'минуты'];
    const c = ['дней', 'часов', 'минут'];
    if([1,21,31,41,51].includes(count)){
      return a[num];
    } else if (
      [2,3,4,22,23,24,32,33,34,42,43,44,52,53,54]
      .includes(count)
    ) {
      return b[num];
    } else {
      return c[num];
    };
  };
  
  const start = () => {
    const timer = getTimeRemaining();

    timerCountkDay.textContent = timer.days < 10 ? `0${timer.days}` : timer.days;
    timerCountHour.textContent = timer.hours < 10 ? `0${timer.hours}` : timer.hours;
    timerCountMin.textContent = timer.minutes < 10 ? `0${timer.minutes}` : timer.minutes;

    timerUnitkDay.textContent = declensionTime(timer.days, 0);
    timerUnitHour.textContent = declensionTime(timer.hours, 1);
    timerUnitMin.textContent = declensionTime(timer.minutes, 2);

    const interbalId = setTimeout(start, 1000);

    if(timer.timeRemaining <= 59000) {
      clearTimeout(interbalId);
      heroText.remove();
      heroTimer.remove();
    };
  };
  start();
};