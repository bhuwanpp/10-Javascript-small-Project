function formatTime(value){
    return String(value).padStart(2,0)

}

const start = document.getElementById('start')
const reset = document.getElementById('reset')
const sec = document.getElementById('sec')
const milSec = document.getElementById('milSec')
const minute = document.getElementById('minute')

let secValue = 0
let milValue = 0
let minuteV = 0


sec.textContent  =  formatTime(secValue)
milSec.textContent  = formatTime(milValue)
minute.textContent  = formatTime(minuteV)

start.addEventListener('click',() =>{
    handleStart()

})
let running = false
let interval 

const handleStart = () =>{
    running = !running
    if(running){
        interval = setInterval(() =>{
           milValue++
           if (milValue>60){
            milValue = 0
            secValue++
           }
            if (secValue>59){
            secValue = 0
            minuteV++
           }
           sec.textContent = formatTime(secValue)
           milSec.textContent =formatTime(milValue)
           minute.textContent =formatTime(minuteV)

        },10)
    }else{
        clearInterval(interval)
    }

}
reset.addEventListener('click',() =>{
    handleReset()

})

const handleReset = () =>{
    milValue = 0
    secValue = 0
    clearInterval(interval)
    milSec.textContent = milValue
    sec.textContent = secValue


}