let clock = document.querySelector('#clock')
let startBt = document.querySelector('#start')
let pauseBt = document.querySelector('#pause')
let resetBt = document.querySelector('#reset')

// console.log(clock, startBt, stopBt)

let count = 0
let timer = null


function stopWatch(){
    
    clock.innerText = count
    count++
    
}


startBt.addEventListener('click', ()=>{

    if (timer == null){
        timer = setInterval(stopWatch, 1000)
    }

} )


pauseBt.addEventListener('click', ()=>{

    clearInterval(timer)
    timer = null
    
})

resetBt.addEventListener('click', ()=>{
    clock.innerText = 0
    count = 0
    clearInterval(timer)
    timer = null
})
