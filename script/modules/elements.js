export const heroTimer = document.querySelector('.hero__timer');
export const heroText = document.querySelector('.hero__text');
heroTimer.setAttribute('data-timer-deadline', '22/02/2025');

export const deadline = heroTimer.getAttribute('data-timer-deadline')
  .split('/').reverse().join('-');

export const tourDate = document.querySelector('#tour__date');
export const tourPeople = document.querySelector('#tour__people');
  
export const reservationDate = document.querySelector('#reservation__date');
export const reservationPeople = document.querySelector('#reservation__people');