const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = ingredients.map(value => {
const ingredientsEl = document.createElement("li");
ingredientsEl.classList.add("item");
ingredientsEl.textContent = value;
return ingredientsEl;
});

const listEl = document.querySelector('#ingredients'); 
listEl.append(...list);


// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй 
// метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.