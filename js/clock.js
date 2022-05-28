//BOM - Browser Object Model
//Wondow
//DOM - document Object Model
//document
//document.querySelector("selector css") //повертає 1 елемент
//document.querySelectorAll('selector css') //повертає масив елементів (array of elements)
const clock = document.querySelector('.clock');
clock.innerHTML =  new Date().toLocaleTimeString();
