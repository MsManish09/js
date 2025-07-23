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

let result = m()

result()



