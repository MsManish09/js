// Instagram challenge with promise

console.time("myFunctionExecution");

    // start

    function posting(){
        return new Promise( (resolve, reject) =>{
            console.log('Post a image')
            resolve()
        })
    }

    // step 1 : selecting image - 4s

    function selImg(){
        return new Promise( (resolve, reject) => {
            console.log('Selecting image....')
        
            setTimeout(() => {
                console.log('Image selected: PIC1')
                console.log('--------------------------------')
                resolve("pic1")

                reject('There is a problem posting the image')
            }, 4000);
        } )
    }

    // step 2: Adding filter - 2s
    function addFilter(image){
        return new Promise( (resolve, reject) => {
            console.log('Adding  Filter....')
        
            setTimeout(() => {
                console.log(`Cool filter added to ${image}`)
                console.log('--------------------------------')
                resolve({image, filter: "coolfilter"})

                reject('There is a problem posting the image')
            }, 2000);
        } )
    }

    // step 3: Adding caption - 5s
    function addCaption(input){
        return new Promise( (resolve, reject) => {
            console.log('Adding caption')
        
            setTimeout(() => {
                console.log(`Cool caption added to ${input.image} with filter ${input.filter}`)
                console.log('--------------------------------')
                resolve({...input, filter: "coolfilter", caption:'cool caption'})

                reject('There is a problem posting the image')
            }, 5000);
        } )
    }

    // Step 4: Uploading image with filter and caption
    function uploading(input){
        return new Promise( (resolve, reject) => {
            console.log('Uploading image')
        
            setTimeout(() => {
                console.log(`${input.image} with filter ${input.filter} with caption ${input.caption} is uploaded`)
                console.log('--------------------------------')
                resolve()

                reject("Upload failed")
                console.timeEnd("myFunctionExecution");
            }, 4000);
        } )
    }


posting()
.then(selImg) // receives result of posting() & passes it to addFilter

.then(addFilter) // // receives result of selImg() and passes itto addFilter
.then(addCaption) // // receives result of addFilter() and passes it to addCaption
.then(uploading) // receives result of addFilter() and passes it to uploading
.catch(() => {console.log('Error uploading image to your profile')})
.finally(() => {console.log(`Image posted in your Instagram`)})
