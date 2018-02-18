import { defineMolad, isMeubarYear, prettyPrint } from './molad'
import { monthsOrdinary, monthsMeubar, daysOfWeek } from './constans'
import { defineRoshAshona } from './roshAshona'
import { getDayOfMonth, getDaysOfTheYear } from './hodoshim';

function getInfo(year) {
  const isMeubar = isMeubarYear(year);
  let currentMonths = [];
  let result = [];

  if(!isMeubar) {
    currentMonths = monthsOrdinary;
  } else {
    currentMonths = monthsMeubar;
  }

  currentMonths.forEach((month) => {
    let molad = defineMolad(year, month);
    result.push({
      month: month,
      molad: prettyPrint(molad)
    });
  });

  return result;
}

const tb = document.getElementById('tbody');
const table = document.getElementById('main-table');
const year = document.getElementById('year');
const calenda = document.getElementById('calenda');

if(+year.value) {
  let infoMolad = getInfo(+year.value);

  infoMolad.forEach(current => {
    let tr = createTr(current);
    tb.appendChild(tr);
  });
  createCalenda(+year.value);
}

year.addEventListener('change', (event) => {
  event.preventDefault();
  tb.innerHTML = '';
  calenda.innerHTML = '';
  let infoMolad = getInfo(event.target.value);

  infoMolad.forEach(current => {
    let tr = createTr(current);
    tb.appendChild(tr);
  });
  createCalenda(event.target.value);

});

function createTr(currentMolad) {
  let tr = document.createElement('tr');
  let month = document.createElement('td');
  let molad = document.createElement('td');
  month.innerHTML = currentMolad.month;
  molad.innerHTML = currentMolad.molad;
  tr.appendChild(month);
  tr.appendChild(molad);
  return tr;
}


//----calenda

function createMonthTable() {
  const table = document.createElement('table');
  table.classList.add('centered','bordered');
  const thead = document.createElement('thead');
  const tr = document.createElement('tr');
  for(let i = 0; i < 7; i++) {
    const th = document.createElement('th');
    th.innerHTML = daysOfWeek[i];
    tr.appendChild(th);
  }
  thead.appendChild(tr);
  table.appendChild(thead);
  return table;
}

function createMonthDays(monthName, year) {
  const tbody = document.createElement('tbody');
  const dayStart = getDayOfMonth(year, monthName);
  const daysInMonth = getDaysOfTheYear(year).daysInMonths[monthName];
  let firstElem = null;
  for(let i = 0; i <= 5; i++) {
    const tr = document.createElement('tr');
    for(let j = 1; j <= 7; j++) {
      const td = document.createElement('td');
      if(j === dayStart && i === 0) {
        td.innerHTML = 1;
        firstElem = td;
      }
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
  }
  completeMonth(firstElem, daysInMonth);
  return tbody;
}

function completeMonth(firstElem, daysInMonth) {
  let currentElem = firstElem;
  for(let i = 1; i < daysInMonth; i++) {
    if(currentElem.nextSibling) {
      currentElem.nextSibling.innerHTML = i + 1;
      currentElem = currentElem.nextSibling;
    } else {
      currentElem = currentElem.parentElement.nextSibling.firstElementChild;
      currentElem.innerHTML = i + 1;
    }
  }
}

function createMonth(monthName, year) {
  const table = createMonthTable();
  const body = createMonthDays(monthName, year);
  table.appendChild(body);
  if(body.lastChild.firstElementChild.innerHTML === '') {
    body.removeChild(body.lastChild);
  }

  return table;
}

function createCalenda(year) {
  const isMeubar = isMeubarYear(year);
  const months = isMeubar === false ? monthsOrdinary : monthsMeubar;

  months.forEach(month => {
    const col = document.createElement('div');
    col.classList.add('col','s12');
    const title = document.createElement('h5');
    title.innerHTML = month[0].toUpperCase() + month.slice(1);
    title.classList.add('title');
    col.appendChild(title);
    col.appendChild(createMonth(month,year));

    calenda.appendChild(col);
  });
}
