const billAmount = document.getElementById('billAmount')
const tip = document.getElementById('tip')
const people = document.getElementById('people')
const subTip = document.getElementById('subTip')
const addTip = document.getElementById('addTip')
const subPeople = document.getElementById('subPeople')
const addPeople = document.getElementById('addPeople')
const allTip = document.getElementById('allTip')
const allTotal = document.getElementById('allTotal')
const find = document.getElementById('find')

let count = 5
tip.value = `${count}%`
addTip.addEventListener('click',() =>{
    tipIncrease();
})
function tipIncrease(){
    count++
    tip.value= `${count}%`
    
}
subTip.addEventListener('click',() =>{
    tipDecrease();
})
function tipDecrease(){
    if (count>0){
        count--
    }
    tip.value= `${count}%`
    
}


let peopleValue = 1
people.value = `${peopleValue}`
addPeople.addEventListener('click',() =>{
    peopleIncrease();
})
function peopleIncrease(){
    peopleValue++
    people.value= `${peopleValue}`
    
}
subPeople.addEventListener('click',() =>{
    peopleDecrease();
})
function peopleDecrease(){
    if (peopleValue>1){
        peopleValue--
    }
    people.value= `${peopleValue}`
    
}



// total tip
let toTip
let bill
let peopleVal
let totalTip
let totalBill
find.addEventListener('click',() =>{
 bill = billAmount.value
 peopleVal = people.value
allTipFun()
})

function allTipFun(){
    toTip = (bill * count )/100
    totalTip = parseFloat(`${toTip}` / `${peopleVal}`).toFixed(2)
    allTip.textContent = `$${totalTip}`

    // bill 
    totalBill = parseFloat((Number(bill) + Number(totalTip)) / peopleVal).toFixed(2)
    allTotal.textContent = `$${totalBill}`
}




