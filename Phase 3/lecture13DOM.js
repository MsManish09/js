
// let heading = document.getElementsByTagName('h1')

// console.log(heading)
// console.log(heading[0])

// manipulation of h1

// // 1. .innertext
// heading[0].innerText = 'this text is manipulated'

// // 2. innerhtml
// heading[0].innerHTML = '<span>this text is manipulated using .innerHTML</span>'

// 3. .textContent
// heading[0].textContent = 'this text is manipulated using .textContent'

// fetch('https://jsonplaceholder.typicode.com/todos/')
// .then(d =>{ return d.json()})
// .then(data => console.log(data))
// .catch(err => console.log('something went worng', err))

// Attribution manipulation-----------------------

// let h1 = document.querySelector('h1')
// console.log(h1)

// console.log(h1.getAttribute('class'))
// console.log(h1.getAttribute('id'))
 
let im = document.querySelector('img')
// console.log(im.getAttribute('src'))

let image_arr = [
    'https://images.pexels.com/photos/31861343/pexels-photo-31861343.jpeg',

    'https://images.pexels.com/photos/32962911/pexels-photo-32962911.jpeg',

    'https://images.pexels.com/photos/33223598/pexels-photo-33223598.jpeg',

    'https://images.pexels.com/photos/33240687/pexels-photo-33240687.jpeg'
]

let count = 0
let id = setInterval(() => {
   
        im.setAttribute('src', image_arr[count])
        im.setAttribute('alt', count+1)

        count = (count + 1 ) % image_arr.length

}, 4000);

setTimeout(() => {
    clearInterval(id)
}, 50000);