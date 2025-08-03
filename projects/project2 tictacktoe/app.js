
const cells = document.querySelectorAll('.cells')

let winning_combo = [
        [0,1,2],  
        [3,4,5],  
        [6,7,8], 
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [2,4,6],
        [0,4,8]
       ]

for (let cell of cells){
    cell.addEventListener('click', handleClick, {once:true}) // addeventlistener sends the details of the cell clicked.
}

let circleTurn = false

function handleClick(e){

    // 1. mark the symbol. x, o
    let clickedCell = e.target // e.target tells which cells was clicked
    let current_symbol = circleTurn ? 'o' : 'x' // identifies whose turn it was

    clickedCell.classList.add(current_symbol) // adds symbols class to the clicked cell.


    // 2. check result 

       //   winning
       if(check_win(current_symbol)){
       document.querySelector('.resultMessage').innerHTML = `${current_symbol.toUpperCase()} Wins....`

       document.querySelector('.result').classList.add('show')
       }

      //  draw
      else if(check_draw()){
        document.querySelector('.resultMessage').innerHTML = `Draw`

       document.querySelector('.result').classList.add('show')
      }

    // 3. change turn
    circleTurn = !circleTurn
}

function check_draw(){
    return [...cells].every((cell)=>
        cell.classList.contains('x') || cell.classList.contains('o'))
}

function check_win(current_symbol){
   return winning_combo.some((item_row) =>
         item_row.every((item)=>
            cells[item].classList.contains(current_symbol)
        )
    )
}

function restart(){
    window.location.reload()
}

document.querySelector('#reset').onclick = restart