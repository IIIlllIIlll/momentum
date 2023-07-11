const clock = document.querySelector("#clock");
const toDay = document.querySelector("#date");

//function getClock() {
//  const date = new Date();
//  const hour = addPadStart(date.getHours());
//  const minut = addPadStart(date.getMinutes());
//  const second = addPadStart(date.getSeconds());
//  clock.innerText = `${hour}:${minut}:${second}`;
//}
//function addPadStart(num) {
//  return String(num).padStart(2, "0");
//}

function getClock() {
  const date = new Date();
  if (todayVal !== date.toLocaleDateString()) {
    todayVal = date.toLocaleDateString();
    toDay.innerText = todayVal;
  }
  clock.innerText = date.toLocaleTimeString();
}
const date = new Date();
todayVal = date.toLocaleDateString();
toDay.innerText = todayVal;
clock.innerText = date.toLocaleTimeString();

setInterval(getClock, 1000);
