let inputFont = document.querySelector('#font-size-control');
let inputSpan = document.querySelector('#text');

inputFont.addEventListener('input', (event) =>
inputSpan.style.fontSize = `${event.currentTarget.value}px`);



// Напиши скрипт, який реагує на зміну значення input#font-size-control
//  (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість
//   font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір 
//   тексту.








