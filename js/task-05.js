const inputName = document.querySelector('#name-input'); 
const spanName = document.querySelector('#name-output');

inputName.addEventListener('input', onInputChange);



function onInputChange (event) {
    console.log(event.currentTarget.value);
    spanName.textContent = event.currentTarget.value === "" ? 
     "Anonymous" : spanName.textContent = event.currentTarget.value;
}

// function onInputChange (event) {
//     console.log(event.currentTarget.value);
   
//     if (event.currentTarget.value === "") {
//         spanName.textContent = "Anonymous";
//     } else {
//         spanName.textContent = event.currentTarget.value;}
        
// }


// Напиши скрипт, який під час набору тексту в інпуті input#name-input 
// (подія input), підставляє його поточне значення в span#name-output. 
// Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".




