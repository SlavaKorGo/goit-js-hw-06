const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// const list = document.querySelector('gallery')

const listEl = images.map(image => {
  return `<li class="gallery-item"><img src = ${image.url} alt = ${image.alt} width = 360px></li>`;
}).join("");


const ulEl = document.querySelector('.gallery');
ulEl.insertAdjacentHTML("beforeend", listEl);


// const list = document.createElement("li");
// images.forEach(value => {
//   const listImg = document.createElement("img");
//   listImg.url = "${images.url}";
//   listImg.alt = "${images.alt}";
//   // listImg.textContent = value; 
//   list.append(listImg);
// }) 
//  const imgEl = document.querySelector(".gallery");
//  imgEl.append(list);

// Використовуй масив об'єктів images для створення елементів 
// <img>, вкладених в <li>. Для створення розмітки використовуй 
//   шаблонні рядки і метод insertAdjacentHTML().

// Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.
// Додай мінімальне оформлення галереї флексбоксами або грідами через CSS класи.