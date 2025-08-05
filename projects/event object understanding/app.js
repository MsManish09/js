console.log('understanding event object and target')

let cells = document.querySelectorAll('.cells')
console.log(cells)

for (let cell of cells){
    cell.addEventListener('click', cell_info)
}

// 1st way
function cell_info(e){
    let clicked_cell = e.target
    console.log(clicked_cell) // shows which cell ele was clicked.
}

console.log('--------------------------------------')
console.log('--------------------------------------')

// alternative way, both does the same thing
cells.forEach((cell, index)=>{
    cell.addEventListener('click', event=>{
        console.log(`Cell ${index} clicked`)
        let clickCell = event.target
        console.log(`Event Target:`, clickCell)
    })
})