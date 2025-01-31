import {loadData} from './loadData.js';

const createOption = (value, text, bool = 0) => {
  const option = document.createElement('option');
  option.setAttribute('value', value);
  option.className = 'tour__option';
  if (bool){
    option.className += ' reservation__option'
  };
  option.textContent = text;
  return option;
};

const clearSelect = (elem, text, bool) => {
  elem.innerHTML = '';
  elem.append(createOption('', text, bool))
};

export const renderSelect = async (dateSelect, peopleSelect, textDate, bool) => {
  const data = await loadData();
  clearSelect(dateSelect, textDate, bool);
  clearSelect(peopleSelect, 'Количество человек', bool)

  const dates = data.map(item => {
    return createOption(item.date, item.date, bool)
  })
  dateSelect.append(...dates);

  dateSelect.addEventListener('change', ({target}) => {
    const item = data.find(value => target.value === value.date);
    if (item) {
      clearSelect(peopleSelect, 'Количество человек', bool)
      for (let num = item["min-people"]; num <= item["max-people"]; num++) {
        peopleSelect.append(createOption(num, num, bool));
      } 
    } else {
      clearSelect(peopleSelect, 'Количество человек', bool);
    };
  })
  if (bool){
    const reservationForm = peopleSelect.closest('.reservation__form');
    const reservationData = reservationForm.querySelector('.reservation__data');
    const reservationPrice = reservationForm.querySelector('.reservation__price');
    const month = {
      '11' : 'ноября',
      '12' : 'декабря',
    };

    peopleSelect.addEventListener('change', ({target}) => {
      const index = target.selectedIndex;
      const count = Number(target.options[index].textContent);
      const item = data.find(value => dateSelect.value === value.date);

      const formatted = (item.price * count).toLocaleString('ru-RU'); 
      console.log(typeof count)
      reservationPrice.textContent = count > 0 ? `${formatted}₽` : '';

      const countPeopleText = count + ([2,3,4].includes(count) ? ' человека' : ' человек');
      const [startDate, endDate] = dateSelect.value.split(' - ');
      const [startDay, startMonth] = startDate.split('.');
      const [endDay, endMonth] = endDate.split('.');
      const dateText = 
        `${parseInt(startDay)} ${month[startMonth]} - ${parseInt(endDay)} ${month[endMonth]}`;
      reservationData.textContent = `${dateText}, ${(count > 0) ? countPeopleText : ''}`;
    })
  }
}

