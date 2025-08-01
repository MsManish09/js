
/*

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

*/

// --------------------DOM Tree ------------

let h1 = document.querySelector('h1')
// console.log(h1)

h1.setAttribute('class', 'headers txt_dec') // is not present, add the class. if present removes the class in this case REMOVES
// h1.classList.add('headers')

let p = document.querySelectorAll('p')

for(let paras of p ){
    paras.classList.toggle('para')
}

let ol = document.querySelector('ol')
    ol.classList.add('list')
    ol.classList.add('txt_dec')

let listItems = document.querySelectorAll('li')

for(let items of listItems){
    items.classList.toggle('items')
}

// console.log(ol)
// console.log(ol.parentElement)

let listItem_1 = document.querySelector('#list1')
// console.log(listItem_1)


/*
console.log(listItem_1.parentElement) //ol#orderedlist.list.txt_dec

console.log(listItem_1.parentElement.childElementCount) //4

console.log(listItem_1.parentElement.children[0]) //li#list1.items
console.log(listItem_1.parentElement.children[1]) // //li#lis2.items
console.log(listItem_1.parentElement.children[2]) // //li#list3.items
console.log(listItem_1.parentElement.children[3]) // //li#list4.items


console.log(listItem_1.nextElementSibling) // li#list2.items

console.log(listItem_1.nextElementSibling.nextElementSibling) // li#list3.items

console.log(listItem_1.parentElement.parentElement) // section#2


*/

/*

listItem_1.nextElementSibling.classList.toggle('selectedItems') // item 2 , class changes

listItem_1.nextElementSibling.nextElementSibling.nextElementSibling.classList.toggle('selectedItems') // item 4, class changed


// -----------------DOM Tree : End ---------------------------


// -------------------- Creating new Element using DOM --------------

// document.createElement()

let ollist = document.querySelector('ol')

let item5 = document.createElement('li')
// console.log(item5, "before")

item5.innerHTML = "Item 5"
// console.log(item5, 'After')

ollist.append(item5) // add item5 to the unorder list
item5.classList.add('items')

let item0 = document.createElement('li') // new item creation.
item0.innerHTML = "Item0" // adding text to the item

ollist.prepend(item0) // add item0 athat the top.

item0.classList.add('selectedItems')


*/


// --------------------- Events -----------------------


// action --> Reaction

