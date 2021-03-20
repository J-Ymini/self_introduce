'use strict';

const intro = document.querySelector('.intro-title');
const infor = document.querySelector('.information-title');
const favor = document.querySelector('.favorite-title');
const inwecode = document.querySelector('.inwecode-title');

//intro random arr
function introRandomArr() {
  const stringArr = ["hello, I'm yongmin!!", "hello, I'm 20th wecoder!!"];
  const selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
  const selectStringToArr = selectString.split('');
  return selectStringToArr;
}

// resetTyping
function resetTyping() {
  intro.textContent = '';
  print(introRandomArr());
}

// typing text
function print(randomArr) {
  // console.log(randomArr);
  if (randomArr.length > 0) {
    intro.textContent = intro.textContent + randomArr.shift();
    setTimeout(() => print(randomArr), 80);
  } else {
    setTimeout(() => resetTyping(), 3000);
  }
}

print(introRandomArr());

//blick cursor
function blink() {
  intro.classList.toggle('active');
  infor.classList.toggle('active');
  favor.classList.toggle('active');
  inwecode.classList.toggle('active');
}

setInterval(blink, 500);
