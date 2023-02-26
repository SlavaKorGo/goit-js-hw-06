function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
 

const buttonColor = document.querySelector('.change-color');
const spanColor = document.querySelector('span')
const bodyColor = document.querySelector('body')

buttonColor.addEventListener('click', (event) => {
  const a = getRandomHexColor();
  spanColor.innerHTML = a;
  bodyColor.style.backgroundColor = a;
})



// Напиши скрипт, який змінює кольори фону елемента <body> 
// через інлайн-стиль по кліку на button.change-color і 
// виводить значення кольору в span.color.

// Для генерування випадкового кольору використовуй функцію getRandomHexColor.

