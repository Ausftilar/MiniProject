'use strict';

const deadline = '2023-01-01';

function getTimeReamaining(endtime) {
    const ms = Date.parse(endtime) - Date.parse(new Date());

    const days = Math.floor(ms / (1000 * 60 * 60 * 24)),
          hours = Math.floor(ms / (1000 * 60 * 60) % 24),
          minutes = Math.floor(ms / (1000 * 60) % 60),
          seconds = Math.floor(ms / 1000 % 60);

    return {
        total: ms,
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
    };
}

function getZero(num) {
    if (num >= 0 && num < 10) {
        return `0${num}`;
    } else {
        return num;
    }
}

function setClock(selector, endtime) {
    const timer = document.querySelector(selector);

    const days = timer.querySelector('#days'),
          hours = timer.querySelector('#hours'),
          minutes = timer.querySelector('#minutes'),
          seconds = timer.querySelector('#seconds'),
          timeInterval = setInterval(updateClock, 1000);
    
    updateClock();

    function updateClock() {
        const t = getTimeReamaining(endtime);

        days.innerHTML = getZero(t.days);
        hours.innerHTML = getZero(t.hours);
        minutes.innerHTML = getZero(t.minutes);
        seconds.innerHTML = getZero(t.seconds);

        if (t.total <= 0 ) {
            clearInterval(timeInterval);
        }
    }
          
}

setClock('.countdown', deadline);