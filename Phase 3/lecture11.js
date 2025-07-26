
// Synchronous : runs line by line

// console.log('study start')
// console.log('studing for 1 min')
// console.log('study end')

// Asynchronous: (settimeout())

// console.log('study start') 

// // want to delay execution delay for 2sec
// setTimeout( () => {console.log("study for 2 sec")}, 3000 )
// // exection is delayed 2secs

// console.log('study end')

// --------------------------------

// console.log('manish')

// setTimeout(() => {
//     console.log("hwllo after 4sec")
// },4000);

// setTimeout(() => {
//     console.log("hwllo after 2sec")
// },2000);

// console.log('Bye')

//  timer after '0'

// console.log('hello')

// setTimeout(() => {
//     console.log("hwllo after 0sec")
// },0);

// console.log('bye')


console.log("-------------------------------")


// Instagram task using settimeout()


console.time("myFunctionExecution");
    
//step1:  Selecting image 4s

function SelectingImg(){
    console.log('select image')

    setTimeout(() => {
        console.log('image selected');
        filter("PIC1")
    }, 4000);
}

// Apply filter 2s
function filter(image){
    console.log(`adding filter for ${image}`)

    setTimeout(() => {
        console.log('Filter Added');
        caption(image, "cool filter")
    }, 2000);
}

// Apply Caption 5s
function caption(image, filter){
    console.log(`adding caption for ${image} with ${filter}`)

     setTimeout(() => {
        console.log('cation Added');
        Uploading(image, filter, 'cool caption')
    }, 5000);
}

// Uploading img 4s
function Uploading(img, filter, caption){
    console.log(`uploading ${img} with ${filter} with ${caption}`)

    setTimeout(() => {
        console.log( `${img} uploaded with ${filter} and this ${caption}`);

        console.timeEnd("myFunctionExecution"); // code to check amount of time taken to run the instagram task.
    }, 4000);
}

SelectingImg()


