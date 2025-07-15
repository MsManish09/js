console.log("functions are introduced...")

// Function to return odd numbers in a range

function odd(start, end){

    if (start % 2 === 0){
        start += 1
    }
    
    let oddNums = []

    for ( let i = start; i <= end; i += 2)
    {
        oddNums.push(i)
    }

    return oddNums
}

console.log( odd(1, 100) )

console.log( odd(2, 100) )

// --------------------------------------------------

// Fucntion to return even number in a range

function even( start, end )
{
    if (start % 2 !== 0){
        start += 1
    }

    let evenNums = []

    for( let i = start; i <= end; i += 2 )
    {
        evenNums.push(i)
    }

    return evenNums
}

console.log(even(2, 150))

console.log(even(1, 99))