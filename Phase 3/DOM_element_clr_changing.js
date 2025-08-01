let h1 = document.querySelector('h1')

h1.classList.toggle('header')

let list = document.querySelector('#un_od_list')
const items = list.children;

let colorArr = ['red', 'green', 'blue']

let currentIndex = 0
let currentColorIndex = 0;


// function resetColors() {
//     for (let i = 0; i < items.length; i++) {
//         items[i].classList.toggle('red', 'green', 'blue');
//     }
// }

let id  = setInterval(() => {
    // resetColors(); // Clear all colors first

    // Apply current color to the current list item
    items[currentIndex].classList.add(colorArr[currentColorIndex]);

    // Update indices
    currentIndex = (currentIndex + 1) % items.length;
    currentColorIndex = (currentColorIndex + 1) % colorArr.length;

    
}, 3000);

setTimeout(() => {
    clearInterval(id)
}, 30000);