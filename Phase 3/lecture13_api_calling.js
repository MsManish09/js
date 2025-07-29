
// fetch using promise

// let api = 'https://jsonplaceholder.typicode.com/todos/1'

// fetch(api)// return a promise
// .then((resp)=>{
//     return resp.json() // json() return a promise
// })
// .then((resp) =>{
//     console.log(resp)
// })
// .catch((e)=>{console.log('somethingwent wrong', e)})

// console.log('------------------------------------------------------------------------------')



// // Fetch and async - await

// let api1 = 'https://jsonplaceholder.typicode.com/todos/1'

// async function apiFetch() {
//     const rsp = await fetch(api1)
//     const finRsp = await rsp.json()

//     console.log(finRsp)
//     console.log('------------------------------------------')
// }

// apiFetch()

// ------------------------------------------

// Axios()

// using promise

let api = "https://jsonplaceholder.typicode.com/todos/1"

// axios.get(api)
// .then((value) =>{
//     console.log("Value: ", value.data)
// })
// .catch((err) =>{
//     console.log(err)
// })

// using async - await

/*
async function calling() {
    const resp = await axios.get(api)
    console.log(resp.data)
}

calling()

*/

// -----------------------------------------

// api task - tvmaze

let API = 'https://api.tvmaze.com/search/shows?q=girls'

async function tvmazeApi() {
    const resp = await axios(API)
    
    for(let score of resp.data ){
        console.log(score.score)
    }
}

tvmazeApi()