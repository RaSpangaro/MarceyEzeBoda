
  const second = 1000,
  minute = second * 60,
  hour = minute * 60,
  day = hour * 24;

let countDown = new Date('Jan 21, 2023 19:30:00').getTime(),
x = setInterval(function() {

  let now = new Date().getTime(),
      distance = countDown - now;

  document.getElementById('dias').innerText = Math.floor(distance / (day)),
  document.getElementById('horas').innerText = Math.floor((distance % (day)) / (hour)),
  document.getElementById('minutos').innerText = Math.floor((distance % (hour)) / (minute)),
  document.getElementById('segundos').innerText = Math.floor((distance % (minute)) / second);

}, second)


//slider//

const items = document.querySelectorAll('img');
const itemCount = items.length;
const nextItem = document.querySelector('.next');
const previousItem = document.querySelector('.previous');
let count = 0;

function showNextItem() {
items[count].classList.remove('active');

if(count < itemCount - 1) {
count++;
} else {
count = 0;
}

items[count].classList.add('active');
console.log(count);
}

function showPreviousItem() {
items[count].classList.remove('active');

if(count > 0) {
count--;
} else {
count = itemCount - 1;
}

items[count].classList.add('active');
console.log(count);
}

function keyPress(e) {
e = e || window.event;

if (e.keyCode == '37') {
showPreviousItem();
} else if (e.keyCode == '39') {
showNextItem();
}
}

nextItem.addEventListener('click', showNextItem);
previousItem.addEventListener('click', showPreviousItem);
document.addEventListener('keydown', keyPress);


/*Carousel secundario*/
