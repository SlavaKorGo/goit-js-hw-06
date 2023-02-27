const links = document.querySelectorAll('.item');
console.log('Number of categories:' + links.length);

for (let i = 0; i < links.length; i += 1) {
  console.log('Category:' + links[i].firstElementChild.textContent);
  console.log('Elements:' + links[i].lastElementChild.children.length);
};



// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5