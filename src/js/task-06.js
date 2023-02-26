const validInput = document.querySelector('#validation-input')

validInput.addEventListener('blur',onInputBlur);

 function onInputBlur (event) {
    if (event.currentTarget.value.length === Number(validInput.dataset.length)) {
        validInput.classList.remove("invalid");
     validInput.classList.add("valid");
    } else {
    validInput.classList.remove("valid");
     validInput.classList.add("invalid");
    }
 };



// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), 
// перевіряє його вміст щодо правильної кількості введених символів.
// Яка кількість символів повинна бути в інпуті, зазначається в його 
// атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, 
// якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже 
// додали у вихідні файли завдання.