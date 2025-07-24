function m(){
    var a = 100
    var b = 200
    let c = 300

    function n(){
        console.log(a)
        console.log(c)
    }

    return n
}

let result = m() // n() is returned along with var a, let c. Because n() is depended on var a and let c => Closure.

result() // 100 (a) 300(c)

// -----------------------------------------------------


// Constructors

