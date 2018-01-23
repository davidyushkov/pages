'use strict';

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

let countDown = new Date('Mar 21, 2018 17:00:00').getTime();

let intervalFromNow = setInterval(() => {
  let now = new Date().getTime();
  let distance = countDown - now;

  document.getElementById('days').innerHTML = Math.floor(distance / (day));
  document.getElementById('hours').innerHTML = Math.floor((distance % day)/hour);
  document.getElementById('minutes').innerHTML = Math.floor((distance % hour)/minute);
  document.getElementById('seconds').innerHTML = Math.floor((distance % minute)/second);

}, second);
