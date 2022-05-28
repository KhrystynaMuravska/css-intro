// BOM - Browser Object Model
// Wondow
// DOM - document Object Model
// document
// document.querySelector("selector css") //повертає 1 елемент
// document.querySelectorAll('selector css') //повертає масив елементів (array of elements)

// IIFE - https://developer.mozilla.org/ru/docs/Glossary/IIFE

(function() {
  const clock = document.querySelector('.clock');

  function updateClock() {
    clock.innerHTML = new Date().toLocaleTimeString();
  }
  setInterval(updateClock, 1000) //час буде оновлюватись раз на 1000 мілісекунд (або 1 секунда)
}) ();
