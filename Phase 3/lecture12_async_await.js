// console.log(`Asych Await function()`)


/*
// async fn always returns promise
async function a(){
}
console.log( a() ) // promise


async function aa() {
    return 100
}
console.log( aa() ) // Promise {<fulfilled>: 100}, 100 is the resolved value.

// async fn a manual promise return statment

async function b() {
    return new Promise((resolve, reject) => {reject('this is resolve value')}  
    )
}

console.log( b() )  // reject value would be 'this is resolve value', overriding default async promise reject value
*/

// Instagram task using async - await

// step 1: select img 4s
function selectImg(){
    return new Promise( (resolve, reject) => {
        console.log("select a image to upload...")

        setTimeout(() => {
            console.log('Image selected: PIC1')
            console.log(`----------------------------------------------------------`)

            resolve('PIC1')

        }, 4000);

       
    })
}


// step 2: add filter 2s

function addFilter(img){
    return new Promise( (resolve, reject) => {
        console.log(`Add filter to the selected image ${img} ...`)

        setTimeout(() => {
            console.log(`Cool filter add to image ${img}`)

            console.log(`----------------------------------------------------------`)

            resolve({img, filter:'CoolFilter'})

        }, 2000);

        
    })
}

// step 3: add caption 5s

function addCaption(input){
    return new Promise( (resolve, reject) => {
        console.log(`Adding caption to the selected image ${input.img} with ${input.filter} ...`)

        setTimeout(() => {
            console.log(`Cool caption is added to the selected image ${input.img} with ${input.filter} ...`)

            console.log(`----------------------------------------------------------`)

            resolve({...input,caption:'CoolCaption'})

        }, 5000);

        
    })
}


// step 4: upload 4s
function uploading(input){
    return new Promise( (resolve, reject) => {
        console.log(`Uploading ${input.img} with ${input.filter} and ${input.caption} to your instagram profile...`)

        setTimeout(() => {
            console.log(`${input.img} with ${input.filter} and ${input.caption} is uploaded to your instagram profile.`)

            console.log(`----------------------------------------------------------`)

            resolve('Image uploaded successfully')

        }, 4000);

        
    })
}
// total 15s

async function posting() {
    console.log(`Adding image to your instagram profiel`)

    try {
        const step1 = await selectImg()
        const step2 = await addFilter(step1)
        const step3 = await addCaption(step2)
        const result = await uploading(step3)
        

        console.log(result)
    } 
    catch (error) {
        console.log(`Something went wrong, try again....`)
    }
}

posting()