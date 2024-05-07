// const header = document.querySelector(".header_main");
// console.log(window.navigator.userAgent);
// console.log(window.outerWidth, window.outerHeight);
// console.log(outerWidth, outerHeight);
// console.log(navigator.userAgent);


const count = document.querySelector(".count");

function countDown () {
    let textCont = count.textContent;
currentTime= parseFloat(textCont);

if (currentTime > 0) { count.textContent = currentTime - 1; }
 else { window.clearInterval( timer)}

window.clearInterval 
};


// call back
const timer = window.setInterval(countDown, 1000);
// window.setTimeout(countDown, 1000);

const button = document.getElementsByClassName("button");

let stop = function() {
  if ((timer = window.setInterval(countDown, 1000))) {
    window.cancelInterval(timer);
  }
}


console.log(button);
button.addEventListener('alert',stop);

