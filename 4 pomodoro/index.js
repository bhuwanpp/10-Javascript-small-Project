
function  formatTimeValue(value){
    return String(value).padStart(2,'0')
}
let secValue = 25;

let milValue = 0

const pomodoro = document.getElementById('pomodoro')
const short = document.getElementById('short')
const long = document.getElementById('long')


const sec = document.getElementById('sec')
const milSec = document.getElementById('milSec')

const start = document.getElementById('start')
sec.textContent = `${secValue}:`
let isRunning = false
let intervalId
let audio  = new Audio('sound.mp3')

start.addEventListener('click',() =>{
    if(!isRunning){
        isRunning = true
        start.textContent = 'stop'
     intervalId = setInterval(() =>{
        if (milValue>0){
            milValue--
            milSec.textContent =formatTimeValue(milValue)
        }
        else if (secValue >0 ){
            secValue--
            sec.textContent = `${formatTimeValue(secValue)}:`
            milValue = 59
            milSec.textContent = formatTimeValue(milValue)
        } 
        
        else{
            clearInterval(intervalId)
        }
        if  (secValue === 0 && milValue === 0 ){
            audio.play()

    }
    },)
}else{
    clearInterval(intervalId)
    isRunning = false
    start.textContent = 'start'
}

})

    
pomodoro.addEventListener('click' , () =>{
    handlePomodoro()
})
long.addEventListener('click', () =>{
    handleLong()
})
short.addEventListener('click',() =>{
    handleShort()
})
const handlePomodoro =() =>{
    secValue = 25
    milValue =0
    sec.textContent = `${formatTimeValue(secValue)}:`
    milSec.textContent = formatTimeValue(milValue)
    clearInterval(intervalId)
    document.body.style.backgroundColor = '#c79b9b'
    if  (secValue === 0 && milValue === 0 ){
}
    
}

const handleShort = () =>{
    secValue = 5
    milValue =0
    sec.textContent = `${formatTimeValue(secValue)}:`
    milSec.textContent = formatTimeValue(milValue)
    clearInterval(intervalId)
    document.body.style.backgroundColor = '#a8d4a5'
}


const handleLong = () =>{
    secValue = 15
    milValue =0
    sec.textContent = `${formatTimeValue(secValue)}:`
    milSec.textContent = formatTimeValue(milValue)
    clearInterval(intervalId)
    document.body.style.backgroundColor = '#9bc7c6'

}

