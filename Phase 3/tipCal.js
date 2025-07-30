
const billBut = document.getElementById('calBut')
const billAmt = document.getElementById('billAmt')
const tipPer = document.getElementById('tipPer')
let total = document.getElementById('total')


function billCalc(){
    const actBill = Number(billAmt.value)
    const tipvalue =  Number(tipPer.value)
    const totalValue = actBill + actBill* (tipvalue / 100)
    total.innerText = totalValue.toFixed(2)
}

billBut.addEventListener('click', billCalc)