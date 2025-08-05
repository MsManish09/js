
let api = 'https://dummyjson.com/comments'

// fetch(api)
// .then((res)=> res.json())
// .then((res)=>{
//     for (let comment of res.comments){
//         console.log(comment.body)
//     }
// })

async function api_calling() {
    let res = await axios.get(api)
    res = await res.data
    for (let comment of res.comments){
        console.log(comment.body)    
    }
}

api_calling()
