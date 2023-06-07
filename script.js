"use strict";

const showHour = document.getElementById("show-hour");
const showMin = document.getElementById("show-min");
const showSec = document.getElementById("show-sec");
const showAmPm = document.getElementById("show-ampm");

const formatTime = (time) => {
  return time.toString().padStart(2, "0");
};

const setAmPm = (hours) => {
  return hours >= 12 ? "PM" : "AM";
};

const digiClock = () => {
  const date = new Date();

  let hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();

  showHour.textContent = formatTime(hour);
  showMin.textContent = formatTime(min);
  showSec.textContent = formatTime(sec);
  showAmPm.textContent = setAmPm(hour);
};

setInterval(digiClock, 1000);
