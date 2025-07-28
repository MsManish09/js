// Instagram challenge with promise

// console.time("myFunctionExecution");

//     // start

//     function posting(){
//         return new Promise( (resolve, reject) =>{
//             console.log('Post a image')
//             resolve()
//         })
//     }

//     // step 1 : selecting image - 4s

//     function selImg(){
//         return new Promise( (resolve, reject) => {
//             console.log('Selecting image....')
        
//             setTimeout(() => {
//                 console.log('Image selected: PIC1')
//                 console.log('--------------------------------')
                
//                 resolve("pic1")
//                 reject('There is a problem posting the image')
//             }, 4000);
//         } )
//     }

//     // step 2: Adding filter - 2s
//     function addFilter(image){
//         return new Promise( (resolve, reject) => {
//             console.log('Adding  Filter....')
        
//             setTimeout(() => {
//                 console.log(`Cool filter added to ${image}`)
//                 console.log('--------------------------------')
//                 resolve({image, filter: "coolfilter"})

//                 reject('There is a problem posting the image')
//             }, 2000);
//         } )
//     }

//     // step 3: Adding caption - 5s
//     function addCaption(input){
//         return new Promise( (resolve, reject) => {
//             console.log('Adding caption')
        
//             setTimeout(() => {
//                 console.log(`Cool caption added to ${input.image} with filter ${input.filter}`)
//                 console.log('--------------------------------')
//                 resolve({...input, filter: "coolfilter", caption:'cool caption'})

//                 reject('There is a problem posting the image')
//             }, 5000);
//         } )
//     }

//     // Step 4: Uploading image with filter and caption
//     function uploading(input){
//         return new Promise( (resolve, reject) => {
//             console.log('Uploading image')
        
//             setTimeout(() => {
//                 console.log(`${input.image} with filter ${input.filter} with caption ${input.caption} is uploaded`)
//                 console.log('--------------------------------')
//                 resolve()

//                 reject("Upload failed")
//                 console.timeEnd("myFunctionExecution");
//             }, 4000);
//         } )
//     }


// posting()
// .then(selImg) // receives result of posting() & passes it to selImg
// .then(addFilter) // // receives result of selImg() and passes itto addFilter
// .then(addCaption) // // receives result of addFilter() and passes it to addCaption
// .then(uploading) // receives result of addFilter() and passes it to uploading
// .catch(() => {console.log('Error uploading image to your profile')})
// .finally(() => {console.log(`Image posted in your Instagram`)})




//  Reel task: with promise.

console.time("my code")
function posting(){
    return new Promise( (resolve, reject) => {
        console.log('Start posting reel, Record a video')
        console.log("---------------------------------")
        resolve()
    } )
}

function recReel(){
    console.log('Recording the reel')
    
    return new Promise( (resolve, reject) =>{
        setTimeout( ()=>{
            console.log('Reel recorded')
            console.log("---------------------------------")
            
            resolve("Dancing Reel")
        }, 3000 )
    })
}


function addMusic(reel){
    console.log(`Adding music to the ${reel}`)
    
    return new Promise( (resolve, reject) =>{
        setTimeout( ()=>{
            console.log(`Cool Music added to the ${reel}`)
            console.log("---------------------------------")
            
            resolve({reel, music: 'CoolMusic'})
        }, 2000 )
    })
}

function addHastags(input){
    console.log(`Adding hastags to the ${input.reel} with ${input.music}`)
    
    return new Promise( (resolve, reject) =>{
        setTimeout( ()=>{
            console.log(`hastage #anyoneCanDance add to ${input.reel} with ${input.music}`)
            console.log("---------------------------------")
            
            resolve({...input, hastage: 'anyoneCanDance'})
        }, 1500 )
    })
}

function uploading(input){
    console.log(`${input.reel} with ${input.music} with ${input.hastage} is being uploaded`)
    
    return new Promise( (resolve, reject) =>{
        setTimeout( ()=>{
            console.log(`${input.reel} with ${input.music} with ${input.hastage} is successfully uploaded`)
            console.log("---------------------------------")
            console.timeEnd("my code")

            resolve(input)
        }, 2000 )
    })
}

posting()
.then(recReel) // receives value from resolve() in posting fn() and passes it to recRee() fn, recReel is called here.
.then(addMusic)
.then(addHastags)
.then(uploading)
.finally(() => {console.log('Reel succesfully uploaded')})