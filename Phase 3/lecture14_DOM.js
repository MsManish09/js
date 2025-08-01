
let h1 = document.querySelector('h1')
// console.log(h1)


h1.setAttribute('class', 'headers txt_dec') // added both headers and txt_dec class to the h1 element.


//----------------  .classList ---------------------
h1.classList.remove('txt_dec') // txt_dec class removed from the element

h1.classList.add('txt_dec') // txt_dec class added

h1.classList.toggle('txt_dec') // is not present, add the class. if present removes the class in this case REMOVES

console.log(h1.classList.contains('txt_dec')) // to check if the class is added to the element. => False

h1.classList.toggle('txt_dec') // In this case, Adds.
console.log(h1.classList.contains('txt_dec')) // True