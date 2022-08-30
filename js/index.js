"use strict";

const wrapperDiv = document.querySelector(".conatainer");

for (let item of countDownCardsArr) {
  wrapperDiv.innerHTML += `
  <div class="wrapper">
  <div class="title">
      <h2>🎉🎉Time until ${item.title}🎉🎉</h2>
      </div>
        <div class="countdown">
        <div class="container-day">
        <h3 class="days-${item.id}">Time</h3>
        <h3>Days</h3>
        </div>
      <div class="container-hour">
      <h3 class="hours-${item.id}">Time</h3>
      <h3>Hours</h3>
      </div>
      <div class="container-minutes">
        <h3 class="minutes-${item.id}">Time</h3>
        <h3>Minuts</h3>
        </div>
        <div class="container-seconds">
        <h3 class="seconds-${item.id}">Time</h3>
        <h3>Seconds</h3>
        </div>
    </div>
    </div>
    `;
    
  }
  