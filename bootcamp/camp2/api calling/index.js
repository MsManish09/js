
let api = 'https://dummyjson.com/comments'
// let api_result;
let comment_section = document.querySelector('#comments')

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
    res.comments.sort((a,b) => (b.likes - a.likes)) // sorting in descending order base on likes
    
    // for(let comment of res.comments){
    //     console.log(comment.user.username,': ', comment.body)
    // }

    /*
    
    for(let comment of res.comments){
        let cmt = document.createElement('p') //creating p element for displaying comments.

        cmt.classList.add('cmt') // adding clss to comments

        cmt.innerHTML = `<strong>${comment.user.username}
        :</strong>${comment.body}` // adding usernames and comments inside the <p>

        comment_section.append(cmt) // add comments inside the section
    }

    */

    // printing comments, whose likes are > than 5
    for(let comment of res.comments){
        if(comment.likes > 4){
            let cmt = document.createElement('p') //creating p  element for displaying comments.

            // let likes = document.createElement('h4')
            cmt.classList.add('cmt') // adding clss to comments

            cmt.innerHTML = `<strong>${comment.user.username}: </strong>${comment.body}  <strong> ➡️  likes: ${comment.likes}</strong>` // adding usernames and comments inside the <p>

            comment_section.append(cmt) // add comments inside the section
            //  comment_section.append(likes)
        }
    }
   
}
api_calling()


