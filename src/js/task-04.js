const buttonDecrement =  document.querySelector('button[data-action="decrement"]');
const buttonIncrement =  document.querySelector('button[data-action="increment"]');
const valueShown= document.querySelector('#value')

let counterValue = 0;

buttonDecrement.addEventListener('click', handleButtonDecrementClick);
buttonIncrement.addEventListener('click', handleButtonIncrementClick);

 function handleButtonDecrementClick (value) {
    console.log((counterValue += 1));
    valueShown.textContent = counterValue;
 }; 

 function handleButtonIncrementClick (value) {
    console.log((counterValue -= 1));
    valueShown.textContent = counterValue;
 }; 

//  valueShown.textContent = counterValue;




// Лічильник складається зі спану і кнопок, які по кліку повинні 
// збільшувати і зменшувати його значення на одиницю.


// Створи змінну counterValue, в якій буде зберігатися поточне значення 
// лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй 
// значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.