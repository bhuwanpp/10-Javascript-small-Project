const show = document.getElementById('show')
const buttons = document.querySelectorAll('#button')
buttons.forEach((button) => {
    button.addEventListener('click', ShowText)
})
function ShowText(event) {
    if (event.target.tagName === 'BUTTON') {
        show.append(event.target.innerText)
    }
}
const spaces = document.querySelectorAll('#space')
spaces.forEach((space) => {
    space.addEventListener('click', spaceFun)
})

function spaceFun() {
    buttons.forEach((button) => {
        show.append(' ')

    })
}


const shifts = document.querySelectorAll('#shift')
shifts.forEach((shift) => {
    shift.addEventListener('click', shiftFun)

})
const first = document.querySelector('.first')
const one = document.querySelector('.one')
const two = document.querySelector('.two')
const three = document.querySelector('.three')
const four = document.querySelector('.four')
const five = document.querySelector('.five')
const six = document.querySelector('.six')
const seven = document.querySelector('.seven')
const eight = document.querySelector('.eight')
const nine = document.querySelector('.nine')
const zero = document.querySelector('.zero')
const dash = document.querySelector('.dash')
const equal = document.querySelector('.equal')
const open = document.querySelector('.open')
const close = document.querySelector('.close')
const semicolon = document.querySelector('.semicolon')
const apos = document.querySelector('.apos')
const comma = document.querySelector('.comma')
const fullStop = document.querySelector('.fullStop')
const slash = document.querySelector('.slash')
let isUpper = false
let ast = '1'
function shiftFun() {
    buttons.forEach((button) => {
        if (isUpper) {
            button.textContent = button.textContent.toLowerCase()
            first.textContent = "`"
            one.textContent = "1"
            two.textContent = "2"
            three.textContent = "3"
            four.textContent = "4"
            five.textContent = "5"
            six.textContent = "6"
            eight.textContent = "8"
            nine.textContent = "9"
            zero.textContent = "0"
            dash.textContent = "-"
            equal.textContent = "="
            open.textContent = "["
            close.textContent = "]"
            semicolon.textContent = ";"
            apos.textContent = "'"
            comma.textContent = ","
            fullStop.textContent = "."
            slash.textContent = "/"
        } else {
            button.textContent = button.textContent.toUpperCase()
            first.textContent = "~"
            one.textContent = "!"
            two.textContent = "@"
            three.textContent = "#"
            four.textContent = "$"
            five.textContent = "%"
            six.textContent = "^"
            seven.textContent = "&"
            eight.textContent = "*"
            nine.textContent = "("
            zero.textContent = ")"
            dash.textContent = "_"
            equal.textContent = "+"
            open.textContent = "{"
            close.textContent = "}"
            semicolon.textContent = ":"
            apos.textContent = '"'
            comma.textContent = "<"
            fullStop.textContent = ">"
            slash.textContent = "?"
        }
    })
    isUpper = !isUpper
}

const back = document.getElementById('back')
back.addEventListener('click', backFun);
function backFun() {
    show.textContent = show.textContent.substring(0, show.textContent.length - 1)
}

