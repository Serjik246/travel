import {deadline} from './modules/elements.js'; 
import {timer} from './modules/timer.js'; 
import './modules/acc.js';
import './modules/burger.js'
import './modules/airplane.js';
import {renderSelect} from './modules/render.js';
import {
  tourDate,
  tourPeople,
  reservationDate,
  reservationPeople,
} from './modules/elements.js';

const init = () => {
  timer(deadline);
  renderSelect(tourDate, tourPeople, 'Выбери дату', 0);
  renderSelect(reservationDate, reservationPeople, 'Дата путешествия', 1);
};

init();