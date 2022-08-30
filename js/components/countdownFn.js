'use strict';

const countdown = () => {
    
    const seconds = 1000;
    const minutes = seconds * 60;
    const hour = minutes * 60;
    const day = hour * 24;
    
    for (let item of countDownCardsArr) {
      const counterDate = new Date(`${item.eventDate}`).getTime();
      const currTime = new Date().getTime();
      const difference = counterDate - currTime;
      document.querySelector(`.days-${item.id}`).innerText = Math.floor(difference / day);
      document.querySelector(`.hours-${item.id}`).innerText = Math.floor((difference % day) / hour);
      document.querySelector(`.minutes-${item.id}`).innerText = Math.floor((difference % hour) / minutes);
      document.querySelector(`.seconds-${item.id}`).innerText = Math.floor((difference % minutes) / seconds);
      if (
        document.querySelector(`.days-${item.id}`).innerText === 0 &&
        document.querySelector(`.seconds-${item.id}`).innerText === 0
      ) {
        clearInterval(intervalId);
      }
    }
  
  };
  let intervalId = setInterval(countdown, 1000);
